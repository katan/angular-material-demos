import { Injectable } from '@angular/core';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelHelper {
    private instance: ExcelHelper;
    private XLSX;
    private saveAs;

    constructor(XLSXModule, saveAsModule) {
        if (!this.instance) {
            this.XLSX = XLSXModule;
            this.saveAs = saveAsModule;
        }
        return this;
    }

    public exportAsExcelFile(json: any[], excelFileName: string): void {

        const worksheet = this.XLSX.utils.json_to_sheet(json);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = this.XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    public saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        this.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

}