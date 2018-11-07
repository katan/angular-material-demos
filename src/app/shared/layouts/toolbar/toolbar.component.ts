import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
    @Input() drawer: MatSidenav;

    constructor() { }

}
