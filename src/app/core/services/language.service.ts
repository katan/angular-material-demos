import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LocalStorageService } from '@app/core/services/local-storage.service';
import { AppSettings } from '@app/core/settings/index';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    public language: string;
    public language$: BehaviorSubject<string>;

    constructor(private localStorage: LocalStorageService) {
        this.language$ = new BehaviorSubject<string>('');
    }

    public getLanguages(): Array<any> {
        return AppSettings.i18n;
    }

    public getLanguage(): string {
        return this.language;
    }

    public setLanguage(language: string): void {
        this.language = language;
        this.language$.next(language);
        this.localStorage.set(AppSettings.localStorage.language, language);
    }

    public compare(languageA: string, languageB: string): boolean {
        // Split the language code with "_" or "-" an compare only the first position of the array
        const languageASplited: Array<string> = languageA.split(/-|_/);
        const languageBSplited: Array<string> = languageB.split(/-|_/);

        return languageASplited[0] === languageBSplited[0];
    }
}
