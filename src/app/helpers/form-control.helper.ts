import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoggerService } from '@app/core/services/logger.service';

@Injectable()
export class FormControlHelper {
    private static logger = new LoggerService();

    constructor() { }

    public static generateFormControls(modelValidation: any): any {
        try {
            let controlObj = {};

            for (let control in modelValidation) {
                let validations: any[] = [];

                for (let i = 0; i < modelValidation[control].length; i++) {
                    // Adds function validations
                    if (modelValidation[control][i].value) {
                        validations.push(Validators[modelValidation[control][i].type](modelValidation[control][i].value));
                    }
                    // Adds property validations
                    else {
                        validations.push(Validators[modelValidation[control][i].type]);
                    }
                }
                // Create form control with validations
                controlObj[control] = new FormControl(null, validations);
            }

            // Control object must be contains at least one validation
            return Object.keys(controlObj).length > 0 && controlObj || false;

        } catch (error) {
            // Launch error and return false
            FormControlHelper.logger.error(error);
            return false;
        }
    }
}