import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from "rxjs/operators";

import { AuthService } from '../../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttpAuthInterceptor implements HttpInterceptor {

    private isRefreshing: boolean = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(this.authService.isLoggedIn()) {
            request = this.addToken(request, this.authService.getAccessToken());
        }
        
        return next.handle(request).pipe(
            catchError((error: any) => {
                if(error instanceof HttpErrorResponse && error.status === 401) {
                    return this.handle401Error(request, next);
                } else {
                    return throwError(error);
                }
            })
        )
    }

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if(!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.doRefreshToken().pipe(
                switchMap((res: any) => {
                    console.log('new access token');
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(res.accessToken);
                    return next.handle(this.addToken(request, res.accessToken));
                }));
        } else {
            return this.refreshTokenSubject.pipe(
                filter(token => token != null),
                take(1),
                switchMap(jwt => {
                    return next.handle(this.addToken(request, jwt))
                })
            )
        }
    }
}