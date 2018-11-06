import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Own modules
import { DataTableRouting } from './data-table.routing';
import { SharedModule } from '@app/shared/shared.module';
// OWn components
import { SimpleTableComponent } from './simple-table/simple-table.component';

@NgModule({
    declarations: [SimpleTableComponent],
    imports: [
        RouterModule.forChild(DataTableRouting),
        SharedModule
    ]
})
export class DataTableModule { }
