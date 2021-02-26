import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../utils/validators/password.validator';

import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public form: FormGroup = new FormGroup({
    firstName: new FormControl('Joan', [Validators.required]),
    lastName: new FormControl('Mahiques', [Validators.required]),
    email: new FormControl('joamajor@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('23940Nu240688', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('23940Nu240688', [Validators.required])
  }, {
    validators: MustMatch('password', 'confirmPassword')
  });

  public submitted: boolean = false;

  constructor(
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

    this.authService.signup(this.form.value)
      .subscribe(
        async (res: any) => {
          await this.alertService.presentSuccessAlert(res.message, '/login');
        }
      );
  }

}
