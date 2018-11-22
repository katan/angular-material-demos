import { Component, OnInit } from '@angular/core';

import { LanguageService } from '@app/core/services/language.service';
import { LocalStorageService } from '@app/core/services/local-storage.service';

import { AppSettings } from '@app/core/settings/index';

@Component({
    selector: 'app-language-dropdown',
    templateUrl: './language-dropdown.component.html'
})
export class LanguageDropdownComponent implements OnInit {
    public currentLanguage: string;

    constructor(
        private languageService: LanguageService,
        private localStorage: LocalStorageService
    ) {
        // Adds the localStorage as default current language
        this.currentLanguage = this.localStorage.get(AppSettings.localStorage.language);
    }

    ngOnInit() {
        this.languageService.language$.subscribe(
            (newLanguage: string) => {
                if (newLanguage) {
                    this.currentLanguage = newLanguage;
                }
            }
        );
    }

    /**
     *
     * @param {string} languageCode     compatible format like: "es", "en" or "es-ES", "en-GB", etc.
     */
    public changeLanguage(languageCode: string) {
        if (this.currentLanguage !== languageCode) {
            this.languageService.setLanguage(languageCode);
        }
    }

    public isSelected(languageCode: string) {
        if (languageCode === this.currentLanguage) {
            return true;
        }
        // Split the language code with "_" or "-" an compare only the first position of the array
        const languageCodeSplited: Array<string> = languageCode.split(/-|_/);
        const currentLanguageSplited: Array<string> = this.currentLanguage.split(/-|_/);

        return languageCodeSplited[0] === currentLanguageSplited[0];
    }
}
