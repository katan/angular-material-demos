import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';

import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

import {
    ExcelHelper,
    DataTableHelper
} from '@app/core/helpers/index';

import { Ingredient } from '@app/models/index';
import { DeviceHelper } from '@app/core/helpers/index';
import { AssignToComponent } from '@app/shared/toasts/index';

@Component({
    selector: 'app-tabs-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
    public dataSource: MatTableDataSource<Ingredient>;
    public displayedColumns: string[];
    public isMobile: boolean;
    public selection: SelectionModel<Ingredient>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private http: HttpClient, private toast: MatSnackBar) {
        this.isMobile = DeviceHelper.isMobile();
        this.selection = new SelectionModel<Ingredient>(true, []);
        this.displayedColumns = ['select', 'num', 'categoryID', 'name', 'calories', 'ig'];
    }

    ngOnInit() {
        this.http.get('/assets/mocks/data-table.json').subscribe(
            (data: Array<Ingredient>) => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = DataTableHelper.applyFilter(filterValue);
    }

    public isAllSelected(): boolean {
        return DataTableHelper.isAllSelected(this.selection, this.dataSource);
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    public masterToggle(): void {
        DataTableHelper.toggleSelection(this.selection, this.dataSource);
    }

    public assignTo() {
        this.toast.openFromComponent(AssignToComponent, {
            duration: 5000,
            data: this.selection
        });
    }

    public exportToExcel(name: string): void {
        if (this.selection.selected.length > 0) {
            const excelHelper = new ExcelHelper(XLSX, saveAs);
            excelHelper.exportAsExcelFile(this.selection.selected, name);
        } else {
            // TODO: changes toast component
            this.toast.openFromComponent(AssignToComponent, {
                duration: 5000,
                data: this.selection
            });
        }
    }
}
