import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LoggerService } from '@app/core/services/logger.service';

import { FormControlHelper } from '@app/core/helpers/index';
import { passwordRecoveryValidation } from '@app/models/form-validations/index';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html'
})
export class PasswordRecoveryComponent implements OnInit {
    // Properties
    public passwordRecoveryForm: FormGroup;
    public passwordRecoveryValidationModel: any;
    public waiting: boolean;

    constructor(private logger: LoggerService) {
        this.passwordRecoveryValidationModel = passwordRecoveryValidation;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(passwordRecoveryValidation);
        if (formGroupObj) {
            this.passwordRecoveryForm = new FormGroup(formGroupObj);
        } else {
            this.logger.error(new Error('Error generating the form modal & validations'));
        }
    }

    public onSubmit(): void {
        if (this.passwordRecoveryForm.valid) {
            this.waiting = true;
        }
    }

}
