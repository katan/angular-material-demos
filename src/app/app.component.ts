import { Component, OnInit } from '@angular/core';

import { LanguageService } from '@app/core/services/language.service';
import { LocalStorageService } from '@app/core/services/local-storage.service';

import { AppSettings } from '@app/core/settings/index';
import { NavigatorHelper } from '@app/core/helpers/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private navigatorLanguage: string;

    constructor(
        private language: LanguageService,
        private localStorage: LocalStorageService,
    ) { }

    ngOnInit() {
        // check if exists a previous language selection
        if (!this.localStorage.get(AppSettings.localStorage.language)) {

            // Get the navigator language
            this.navigatorLanguage = NavigatorHelper.getLanguage();
            this.language.setLanguage(this.navigatorLanguage);

            // TODO, implement an available languages array
        }
    }
}
