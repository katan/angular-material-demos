import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabs-integrations',
    templateUrl: './integrations.component.html',
    styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {
    public hidePassword: boolean;

    constructor() {
        this.hidePassword = true;
    }

    ngOnInit() {
    }

}
