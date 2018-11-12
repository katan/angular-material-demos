import { Component, OnInit } from '@angular/core';

import { DeviceHelper } from '@app/core/helpers/index';

@Component({
    selector: 'app-language-options',
    templateUrl: './language-options.component.html',
    styleUrls: ['./language-options.component.scss']
})
export class LanguageOptionsComponent implements OnInit {

    public isMobile: boolean;

    constructor() {
        this.isMobile = DeviceHelper.isMobile();
    }

    ngOnInit() {
    }

}
