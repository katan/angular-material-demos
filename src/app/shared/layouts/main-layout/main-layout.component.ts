import { Component, OnInit } from '@angular/core';

import { ThemingService } from '@app/core/services/index';
import { AppSettings } from '@app/core/settings/index';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {
    public currentTheme: string;

    constructor(private theming: ThemingService) { }

    ngOnInit() {
        // Set the default theming at start
        // this.theming.set(AppSettings.defaultTheme);

        this.theming.theming$.subscribe(
            (newTheme => {
                console.log(newTheme);
                this.currentTheme = newTheme;
            })
        )
    }
}
