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
                redirectTo: 'data-tables',
                pathMatch: 'full'
            },
            {   // Lazy load ENVIRONMENT Module
                path: 'data-tables',
                loadChildren: './components/data-tables/data-tables.module#DataTablesModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/data-tables'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
