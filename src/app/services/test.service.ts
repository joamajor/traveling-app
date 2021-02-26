import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url: string = environment.api_url;
  
  constructor(
    private http: HttpClient
  ) { }

  testAuth() {
    return this.http.get(`${this.url}/auth/test`)
      .pipe(
        map((res: any) => {
          return res.user;
        })
      )
  }
}
