import { Component, OnInit } from '@angular/core';

// import { MomentDateAdapter } from '@angular/material-moment-adapter';
// import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// export const MY_FORMATS = {
//     parse: {
//         dateInput: 'LL',
//     },
//     display: {
//         dateInput: 'LL',
//         monthYearLabel: 'MMM YYYY',
//         dateA11yLabel: 'LL',
//         monthYearA11yLabel: 'MMMM YYYY',
//     },
// };

@Component({
    selector: 'app-tabs-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

        // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ]
})
export class FormComponent implements OnInit {
    public isAdvancedMode: boolean;

    constructor() {
        this.isAdvancedMode = false;
    }

    ngOnInit() {
    }

}
