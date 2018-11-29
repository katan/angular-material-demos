import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthService } from '@app/core/services/auth.service';

import { DialogLogoutComponent } from '@app/shared/dialogs/dialog-logout/dialog-logout.component';

@Component({
    selector: 'app-logout-button',
    templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent {

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private auth: AuthService
    ) { }

    public openLogoutDialog(): void {
        // Open logout dialog
        const logoutDialog = this.dialog.open(DialogLogoutComponent, {
            width: '300px'
        });

        logoutDialog.afterClosed().subscribe(result => {
            if (result) {
                // User click on logout session button
                this.auth.logout()
                    .then(() => {
                        this.router.navigateByUrl('/login').then(
                            () => console.log('Call a session service to logout')
                        );
                    });
            }
        });

    }
}
