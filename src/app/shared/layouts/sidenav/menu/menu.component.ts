import { Component } from '@angular/core';

import { MenuRoute, MENU_ROUTES } from '@app/models/index';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    public showMenu: string;
    public menuItems: MenuRoute[];

    constructor() {
        this.showMenu = '';
        this.menuItems = MENU_ROUTES;
    }

    public toggleMenu(element): void {
        element = element.toLocaleLowerCase().replace(' ', '-');
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
