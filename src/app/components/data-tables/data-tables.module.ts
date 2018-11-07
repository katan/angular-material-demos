import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Own modules
import { DataTablesRouting } from './data-tables.routing';
import { SharedModule } from '@app/shared/shared.module';
// OWn components
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { CompleteTableComponent } from './complete-table/complete-table.component';

@NgModule({
    declarations: [SimpleTableComponent, SortTableComponent, PaginationTableComponent, CompleteTableComponent],
    imports: [
        RouterModule.forChild(DataTablesRouting),
        SharedModule
    ]
})
export class DataTablesModule { }
