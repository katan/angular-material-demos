import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DeviceHelper } from '@app/core/helpers/index';
import { DialogRemoveItemComponent } from '@app/shared/dialogs/index'

@Component({
    selector: 'app-language-options',
    templateUrl: './language-options.component.html',
    styleUrls: ['./language-options.component.scss']
})
export class LanguageOptionsComponent {

    public elementId: string;
    public isMobile: boolean;

    @Input() initHtmlEditor: string;

    constructor(private dialog: MatDialog) {
        this.isMobile = DeviceHelper.isMobile();
    }

    removeLanguage(language: string): void {
        // Open logout dialog
        const removeLanguageDialog = this.dialog.open(DialogRemoveItemComponent, {
            width: '300px',
            data: {
                type: 'language',
                name: `${language} language`
            }
        });

        removeLanguageDialog.afterClosed().subscribe(result => {
            if (result) {
                // User click on logout session button
                console.log('Call to remove item');
            }
        });
    }
}
