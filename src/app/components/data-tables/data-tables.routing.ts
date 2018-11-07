import { Routes } from '@angular/router';

// Components
import { SimpleTableComponent } from '@app/components/data-tables/index';
import { SortTableComponent } from '@app/components/data-tables/index';
import { PaginationTableComponent } from '@app/components/data-tables/index';
import { CompleteTableComponent } from '@app/components/data-tables/index';

export const DataTablesRouting: Routes = [
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