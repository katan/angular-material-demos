import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()
export class DataTableHelper {

    constructor() { }

    public static applyFilter(value: string): string {
        return value.trim().toLowerCase();
    }

    public static isAllSelected(selection: SelectionModel<any>, dataSource: MatTableDataSource<any>): boolean {
        const numSelected: number = selection.selected.length;
        const numRows: number = (dataSource.filteredData && dataSource.filteredData.length < dataSource.data.length)
            ? dataSource.filteredData.length
            : dataSource.data.length;

        return numSelected === numRows || numSelected > dataSource.filteredData.length;
    }

    public static toggleSelection(selection: SelectionModel<any>, dataSource: MatTableDataSource<any>): void {
        if (DataTableHelper.isAllSelected(selection, dataSource)) {
            selection.clear()
        } else {
            if (dataSource.filteredData && dataSource.filteredData.length > 0) {
                dataSource.filteredData.forEach(row => selection.select(row));
            } else {
                dataSource.data.forEach(row => selection.select(row));
            }
        }
    }
}