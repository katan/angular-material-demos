import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ThemingService } from '@app/core/services/theming.service';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {
    public config: PerfectScrollbarConfigInterface;
    public currentTheme: string;

    constructor(private theming: ThemingService) { }

    ngOnInit() {
        // Set the default theming at start
        this.theming.theming$.subscribe(
            (newTheme => {
                this.currentTheme = newTheme;
            })
        )
    }
}
