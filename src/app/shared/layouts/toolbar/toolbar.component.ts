import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogLogoutComponent } from '@app/shared/dialogs/dialog-logout/dialog-logout.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    public openLogoutDialog(): void {
        const logoutDialog = this.dialog.open(DialogLogoutComponent, {
            width: '300px'
        });

        logoutDialog.afterClosed().subscribe(result => {
            if (result) {
                console.log('Call a session service to logout');
            }
        });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.animal = result;
        // })
    }
}
