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

    public getLanguage(): string {
        return this.language;
    }

    public setLanguage(language: string): void {
        this.language = language;
        this.language$.next(language);
        this.localStorage.set(AppSettings.localStorage.language, language);
    }
}
