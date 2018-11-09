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
            {   // Lazy load DataTables Module
                path: 'data-tables',
                loadChildren: './components/data-tables/data-tables.module#DataTablesModule'
            },
            {   // Lazy load Forms Module
                path: 'forms',
                loadChildren: './components/forms/forms.module#FormsModule'
            },
            {   // Lazy load Forms Module
                path: 'tabs',
                loadChildren: './components/tabs/tabs.module#TabsModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
