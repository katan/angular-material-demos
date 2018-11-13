import { Component, Input, OnChanges } from '@angular/core';

import { DeviceHelper } from '@app/core/helpers/index';

@Component({
    selector: 'app-language-options',
    templateUrl: './language-options.component.html',
    styleUrls: ['./language-options.component.scss']
})
export class LanguageOptionsComponent {

    public elementId: string;
    public isMobile: boolean;

    @Input() initHtmlEditor: string;

    constructor() {
        this.isMobile = DeviceHelper.isMobile();
    }
}
