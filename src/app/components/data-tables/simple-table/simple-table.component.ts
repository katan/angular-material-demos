import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ingredient } from '@app/models/index';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html'
})
export class SimpleTableComponent implements OnInit {
    public dataSource: Array<Ingredient>;
    public displayedColumns: string[];

    constructor(private http: HttpClient) {
        this.displayedColumns = ['categoryID', 'name', 'calories', 'IG'];
    }

    ngOnInit() {
        this.http.get('/assets/mocks/data-table.json').subscribe(
            (data: Array<Ingredient>) => {
                this.dataSource = data;
            }
        );
    }

}
