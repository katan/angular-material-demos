import { Platform } from '@angular/cdk/platform';
import { NativeDateAdapter } from '@angular/material';

import { AppSettings } from '@app/core/settings/index';
import { LocalStorageService } from '@app/core/services/local-storage.service';

// extend NativeDateAdapter's format method to specify the date format.
export class CustomDateAdapter extends NativeDateAdapter {

    constructor(private localStorage: LocalStorageService) {
        super('en-GB', new Platform()); // Default

        // Change locale from local storage if exists
        const locale = this.localStorage.get(AppSettings.localStorage.language);
        if (locale) {
            super.setLocale(this.localStorage.get(AppSettings.localStorage.language));
        }
    }

    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            const day = date.getUTCDate();
            const month = date.getUTCMonth() + 1;
            const year = date.getFullYear();
            // Return the format as per your requirement
            return `${year}-${month}-${day}`;
        } else {
            if (date.toLocaleDateString instanceof Function) {
                const inputFormart = { year: "numeric", month: "numeric", day: "numeric" };
                const options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };

                return (JSON.stringify(displayFormat) === JSON.stringify(inputFormart))
                    ? date.toLocaleDateString(this.locale, options)
                    : date.toLocaleDateString(this.locale, displayFormat);
            } else {
                return date.toDateString();
            }
        }
    }

    getFirstDayOfWeek(): number {
        const language = AppSettings.i18n.find(
            (element) => element.locale === this.locale
        );
        return language && language.firstDayOfWeek || 0;
    }
}