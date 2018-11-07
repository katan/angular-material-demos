import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
// Components
import { SimpleTableComponent } from '@app/components/data-tables/index';
import { SortTableComponent } from '@app/components/data-tables/index';
import { PaginationTableComponent } from '@app/components/data-tables/index';
import { CompleteTableComponent } from '@app/components/data-tables/index';

export const dataTablesRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'simple-table',
                pathMatch: 'full'
            },
            {
                path: 'simple-table',
                component: SimpleTableComponent
            },
            {
                path: 'sort-table',
                component: SortTableComponent
            },
            {
                path: 'pagination-table',
                component: PaginationTableComponent
            },
            {
                path: 'complete-table',
                component: CompleteTableComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        SimpleTableComponent,
        SortTableComponent,
        PaginationTableComponent,
        CompleteTableComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(dataTablesRouting)
    ],
    exports: [RouterModule]
})
export class DataTablesRoutingModule { }
