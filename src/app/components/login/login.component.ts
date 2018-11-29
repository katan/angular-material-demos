import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { SessionStorageService } from '@app/core/services/session-storage.service';
import { LoggerService } from '@app/core/services/logger.service';

import { FormControlHelper } from '@app/helpers/index';
import { loginValidation } from '@app/models/form-validations/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
    // Properties
    public loginForm: FormGroup;
    public loginValidationModel: any;
    public waiting: boolean;
    public hidePassword: boolean;
    public loginErrorMsg: string;

    constructor(
        private router: Router,
        private sessionStorage: SessionStorageService,
        private logger: LoggerService
    ) {
        this.loginValidationModel = loginValidation;
        this.hidePassword = true;
        this.waiting = false;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(this.loginValidationModel);
        if (formGroupObj) {
            this.loginForm = new FormGroup(formGroupObj);
        } else {
            this.logger.error(new Error('Error generating the form modal & validations'));
        }
    }

    ngOnDestroy() {
        this.hidePassword = true;
        this.waiting = false;
    }

    public onSubmit(): void {
        if (this.loginForm.valid) {
            this.waiting = true;

            this.sessionStorage.set('username', this.loginForm.get('username').value);
            this.sessionStorage.set('timestamp', new Date().getDate());

            this.router.navigateByUrl('forms/simple-form')
                .then(() => this.ngOnDestroy());
        }
    }
}
