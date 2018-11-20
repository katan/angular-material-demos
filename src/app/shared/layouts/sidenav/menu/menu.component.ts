import { Component } from '@angular/core';

import { MenuRoute, MENU_ROUTES } from '@app/models/index';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    public active: string;
    public menuItems: MenuRoute[];

    public currentIndex: number;

    constructor() {
        this.menuItems = MENU_ROUTES;
    }

    public setIndex(index: number): void {
        this.currentIndex = index;
    }

    public toggleActive(element): void {
        this.active = element;
    }
}
