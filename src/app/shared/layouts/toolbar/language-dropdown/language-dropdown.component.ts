import { Component, OnInit } from '@angular/core';

import { LanguageService } from '@app/core/services/language.service';
import { LocalStorageService } from '@app/core/services/local-storage.service';

import { AppSettings } from '@app/core/settings/index';

@Component({
    selector: 'app-language-dropdown',
    templateUrl: './language-dropdown.component.html'
})
export class LanguageDropdownComponent implements OnInit {
    public availableLanguages: any[];
    public currentLanguage: string;

    constructor(
        private languageService: LanguageService,
        private localStorage: LocalStorageService
    ) {
        // Adds the localStorage as default current language
        this.currentLanguage = this.localStorage.get(AppSettings.localStorage.language);
        // Get available alnguages
        this.availableLanguages = this.languageService.getLanguages();
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
        return this.languageService.compare(languageCode, this.currentLanguage);
    }
}
