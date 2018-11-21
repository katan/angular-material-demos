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
                component: SimpleTableComponent,
                data: {
                    title: 'Data tables',
                    icon: 'table_chart',
                    urls: [
                        { title: 'Simple table' }
                    ]
                }
            },
            {
                path: 'sort-table',
                component: SortTableComponent,
                data: {
                    title: 'Data tables',
                    icon: 'table_chart',
                    urls: [
                        { title: 'Sort table' }
                    ]
                }
            },
            {
                path: 'pagination-table',
                component: PaginationTableComponent,
                data: {
                    title: 'Data tables',
                    icon: 'table_chart',
                    urls: [
                        { title: 'Pagination table' }
                    ]
                }
            },
            {
                path: 'complete-table',
                component: CompleteTableComponent,
                data: {
                    title: 'Data tables',
                    icon: 'table_chart',
                    urls: [
                        { title: 'Complete table' }
                    ]
                }
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
