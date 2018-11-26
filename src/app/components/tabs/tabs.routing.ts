import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material';

import { SharedModule } from '@app/shared/shared.module';
import { CustomDateAdapter } from '@app/shared/adapters/index';
// Components
import { HtmlEditorComponent } from '@app/shared/html-editor/html-editor.component';
import { StretchedLabelsComponent } from './stretched-labels/stretched-labels.component';
import { DataTableComponent } from './stretched-labels/data-table/data-table.component';
import { FormComponent } from './stretched-labels/form/form.component';
import { LanguageOptionsComponent } from './stretched-labels/language-options/language-options.component';
import { IntegrationsComponent } from './stretched-labels/integrations/integrations.component';
import { LocalStorageService } from '@app/core/services/local-storage.service';

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
                component: StretchedLabelsComponent,
                data: {
                    title: 'Tabs',
                    icon: 'tab',
                    urls: [
                        { title: 'Stretched-labels' }
                    ]
                }
            }
        ]
    }
];

@NgModule({
    declarations: [
        StretchedLabelsComponent,
        LanguageOptionsComponent,
        DataTableComponent,
        FormComponent,
        HtmlEditorComponent,
        IntegrationsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(tabsRouting)
    ],
    exports: [RouterModule],
    providers: [
        { provide: DateAdapter, useClass: CustomDateAdapter, deps: [LocalStorageService] }
    ]
})

export class TabsRoutingModule { }
