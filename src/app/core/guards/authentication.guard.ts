
import { Router, CanActivate } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { AuthService } from '@app/core/services/auth.service';
import { LoggerService } from '@app/core/services/logger.service';

import { DialogUnauthorizeComponent } from '@app/shared/dialogs/index'

export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private auth: AuthService,
        private logger: LoggerService
    ) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        const hasLogged = this.auth.hasLogged();
        // user has logged ?
        if (!hasLogged) {
            this.openUnauthorizeModal('login');
        }
        return hasLogged;
    }


    /**
     * Redirect to "login page" first and then open a unauthorize modal
     *
     * @private
     */
    private openUnauthorizeModal(redirectTo: string) {
        try {
            this.router.navigateByUrl(redirectTo)
                .then(() => {
                    // Open logout dialog
                    this.dialog.open(DialogUnauthorizeComponent, {
                        width: '360px'
                    });
                });
        } catch (error) {
            this.logger.error(error);
        }
    }
}
