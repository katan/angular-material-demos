import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { SimpleTableComponent } from '@app/components/data-table/index';
// Components

export const DataTableRouting: Routes = [
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