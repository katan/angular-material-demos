import { Component, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
    private toggleMenu: boolean;
    @Input() toggleMenu$: EventEmitter<boolean> | boolean;
    @Input() sidenav: MatSidenav;

    constructor() { }

    onToggleMenu(): void {
        this.toggleMenu = !this.toggleMenu;
        this.sidenav.toggle();

        if (this.toggleMenu$ instanceof EventEmitter) {
            this.toggleMenu$.emit(this.toggleMenu);
        }
    }
}
