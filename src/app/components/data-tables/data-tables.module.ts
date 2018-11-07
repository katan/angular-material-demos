import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Own modules
import { DataTablesRouting } from './data-tables.routing';
import { SharedModule } from '@app/shared/shared.module';
// OWn components
import { SimpleTableComponent } from './simple-table/simple-table.component';

@NgModule({
    declarations: [SimpleTableComponent],
    imports: [
        RouterModule.forChild(DataTablesRouting),
        SharedModule
    ]
})
export class DataTablesModule { }
