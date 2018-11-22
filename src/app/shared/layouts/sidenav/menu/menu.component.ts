import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuRoute, MENU_ROUTES } from '@app/models/index';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    public active: string;
    public menuItems: MenuRoute[];

    public currentIndex: number;

    constructor(private router: Router) {
        this.menuItems = MENU_ROUTES;

        this.router.events.subscribe(
            (event => {
                if (event instanceof NavigationEnd) {
                    // Expande the current menu
                    const urlSplited: Array<string> = event.url.split('/').filter(value => value);
                    this.currentIndex = this.menuItems.findIndex(element => {
                        return element.path === urlSplited[0]
                    })

                    // Select de current submenu if exists
                    if (this.menuItems[this.currentIndex]) {
                        const activeSubmenu: MenuRoute[] = this.menuItems[this.currentIndex].submenu.filter(element => {
                            return element.path === event.url;
                        });
                        if (activeSubmenu.length > 0) {
                            this.toggleActive(activeSubmenu[0].path);
                        }
                    }
                }
            })
        )
    }

    public setIndex(index: number): void {
        this.currentIndex = index;
    }

    public toggleActive(elementPath: string): void {
        this.active = elementPath;
    }
}
