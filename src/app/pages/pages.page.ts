import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { TestService } from '../services/test.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  public user$: Observable<User>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.user$ = this.testService.testAuth();
  }

  logout() {
    this.authService.signout()
      .subscribe(() => {
        this.router.navigate(['/start']);
      })
  }

}
