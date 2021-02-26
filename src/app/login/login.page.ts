import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('joamajor@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('23940Nu240688', [Validators.required]),
  });

  public submitted: boolean = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  get f() { return this.form.controls; }

  submit() {
    this.submitted = true;
    this.alertService.loading = true;

    if(!this.form.valid) return;

    this.authService.signin(this.form.value)
      .subscribe(() => {
        this.alertService.loading = false;
        this.router.navigate(['/app']);
      });
  }

}
