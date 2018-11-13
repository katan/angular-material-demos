import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'app-html-editor',
    templateUrl: './html-editor.component.html',
    styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent implements OnInit, OnDestroy {
    public editorConfig: AngularEditorConfig;
    public htmlContent: string;

    @Input() idname: string;
    @Input() placeholder: string;

    constructor() { }

    ngOnInit(): void {
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '10rem',
            minHeight: '2rem',
            placeholder: this.placeholder,
            translate: 'no',
            uploadUrl: 'v1/images', // if needed
            customClasses: [ // optional
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
    }

    ngOnDestroy() {

    }
}
