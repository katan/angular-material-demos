import { Component } from '@angular/core';

import { MenuRoute, MENU_ROUTES } from '@app/models/index';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    public showMenu: string;
    public activeSubmenu: string;
    public menuItems: MenuRoute[];

    constructor() {
        this.showMenu = '';
        this.menuItems = MENU_ROUTES;
    }

    public toggleMenu(element, hasSubmenu): void {
        if (hasSubmenu) {
            if (element === this.showMenu) {
                this.activeSubmenu = '0';
            } else {
                this.activeSubmenu = element;
            }
        } else {
            if (element === this.showMenu) {
                this.showMenu = '0';
            } else {
                this.showMenu = element;
            }
        }
    }
}
