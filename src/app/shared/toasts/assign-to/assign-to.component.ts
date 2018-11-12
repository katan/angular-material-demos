import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
    selector: 'app-assign-to',
    templateUrl: './assign-to.component.html',
    styleUrls: ['./assign-to.component.scss']
})
export class AssignToComponent implements OnInit {

    // constructor(@Inject(MAT_SNACK_BAR_DATA) public selection: SelectionMode) { }
    constructor(@Inject(MAT_SNACK_BAR_DATA) public selection: any) { }

    ngOnInit() {
        console.log(this.selection);
    }

}
