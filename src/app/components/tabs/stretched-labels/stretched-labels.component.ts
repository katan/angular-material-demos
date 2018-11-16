import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stretched-labels',
    templateUrl: './stretched-labels.component.html',
    styleUrls: ['./stretched-labels.component.scss']
})
export class StretchedLabelsComponent implements OnInit {
    public currentTabIndex: number;
    public currentLabel: string;

    constructor() {
        this.currentTabIndex = 0;
    }

    ngOnInit() {

    }

    public changeTabIndex(index: number): void {
        this.currentTabIndex = index;
    }
}
