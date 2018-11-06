import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { MainLayoutComponent } from '@app/shared/layouts/index';
// Components

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            // Default
            {
                path: '',
                redirectTo: 'data-table',
                pathMatch: 'full'
            },
            {   // Lazy load ENVIRONMENT Module
                path: 'data-table',
                loadChildren: './components/data-table/data-table.module#DataTableModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/data-table'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
