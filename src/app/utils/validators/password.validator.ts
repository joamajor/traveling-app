import { AbstractControl, ValidatorFn } from '@angular/forms';

export function MustMatch(passwordField: string, confirmPasswordField: string): ValidatorFn {
    return (control: AbstractControl) => {
        const password = control.get(passwordField);
        const confirmPassword = control.get(confirmPasswordField);

        if(confirmPassword.errors && !confirmPassword.errors.mustMatch) {
            return;
        }

        return password.value !== confirmPassword.value ? { mustMatch: true } : null;
    }
}