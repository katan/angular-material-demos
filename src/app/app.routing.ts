import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { MainLayoutComponent } from '@app/shared/layouts/index';
import { AuthLayoutComponent } from '@app/shared/layouts/index';
// Components
import { LoginComponent } from '@app/components/login/login.component';
import { PasswordRecoveryComponent } from '@app/components/password-recovery/password-recovery.component';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'password-recovery',
                component: PasswordRecoveryComponent
            }
        ]
    },
    //
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            // Default
            {
                path: '',
                redirectTo: 'login',
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
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
