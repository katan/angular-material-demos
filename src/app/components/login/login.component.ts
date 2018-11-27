import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { LoggerService } from '@app/core/services/logger.service';

import { FormControlHelper } from '@app/core/helpers/index';
import { loginValidation } from '@app/models/form-validations/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    // Properties
    public loginForm: FormGroup;
    public loginValidationModel: any;
    public waiting: boolean;
    public hidePassword: boolean;

    constructor(
        private router: Router,
        private logger: LoggerService
    ) {
        this.loginValidationModel = loginValidation;
        this.hidePassword = true;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(this.loginValidationModel);
        if (formGroupObj) {
            this.loginForm = new FormGroup(formGroupObj);
        } else {
            this.logger.error(new Error('Error generating the form modal & validations'));
        }

    }

    public onSubmit(): void {
        if (this.loginForm.valid) {
            this.waiting = true;

            this.router.navigateByUrl('forms/simple-form');
        }
    }
}
