import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';

import { LanguageService } from '@app/core/services/language.service';

@Component({
    selector: 'app-tabs-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    public isAdvancedMode: boolean;
    public filterPreviousStartDates: any;
    public filterPreviousEndDates: any;

    constructor(private dateAdapter: DateAdapter<Date>, private language: LanguageService) {
        this.isAdvancedMode = false;
    }

    ngOnInit() {
        this.filterPreviousStartDates = this.filterDates(new Date());
        this.filterPreviousEndDates = this.filterDates(new Date());

        this.language.language$.subscribe(
            (locale) => {
                if (locale) {
                    this.dateAdapter.setLocale(locale);
                }
            })
    }

    public onDataStartChanges(startDate: Date): void {
        // Adds 1 day to the current start date
        const newDate: Date = new Date(startDate);
        newDate.setDate(newDate.getDate() + 1);

        this.filterPreviousEndDates = this.filterDates(newDate);
    }

    private filterDates(newDate: Date) {
        return (date: Date): boolean => {
            return date.getTime() >= new Date(newDate.getFullYear(), newDate.getUTCMonth(), newDate.getUTCDate()).getTime();
        };
    }
}
