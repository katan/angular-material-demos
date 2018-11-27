import { Component, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AppSettings } from '@app/core/settings/index';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
    public hasBreadcrumb: boolean;
    private toggleMenu: boolean;

    @Input() showLanguage: boolean;
    @Input() showAccount: boolean;
    @Input() showLogout: boolean;
    @Input() toggleMenu$: EventEmitter<boolean> | boolean;
    @Input() sidenav: MatSidenav;

    constructor() {
        this.hasBreadcrumb = AppSettings.hasBreadcrumb;
    }

    onToggleMenu(): void {
        this.toggleMenu = !this.toggleMenu;
        this.sidenav.toggle();

        if (this.toggleMenu$ instanceof EventEmitter) {
            this.toggleMenu$.emit(this.toggleMenu);
        }
    }
}
