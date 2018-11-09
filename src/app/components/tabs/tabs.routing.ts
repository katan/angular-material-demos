import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
// Components
import { StretchedLabelsComponent } from './stretched-labels/stretched-labels.component';
import { DataTableComponent } from './stretched-labels/data-table/data-table.component';
import { FormComponent } from './stretched-labels/form/form.component';

export const tabsRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'stretched-labels',
                pathMatch: 'full'
            },
            {
                path: 'stretched-labels',
                component: StretchedLabelsComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        StretchedLabelsComponent,
        DataTableComponent,
        FormComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(tabsRouting)
    ],
    exports: [RouterModule]
})
export class TabsRoutingModule { }