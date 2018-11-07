import { Routes } from '@angular/router';

// Layouts
import { SimpleTableComponent } from '@app/components/data-tables/index';
// Components

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
            }
        ]
    }
];