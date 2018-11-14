import { Component } from '@angular/core';

import { ThemingService } from '@app/core/services/index';

@Component({
    selector: 'app-account-card',
    templateUrl: './account-card.component.html',
    styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {

    constructor(private theming: ThemingService) { }

    public changeTheme(themeName: string): void {
        this.theming.set(themeName);
    }
}
