import { Injectable } from '@angular/core';

const Navigator = window.navigator;

@Injectable()
export class NavigatorHelper {

    constructor() { }

    public static getUserAgent(regexp?): Array<string> {
        if (regexp) {
            return Navigator.userAgent.match(regexp);
        }
        return [Navigator.userAgent];
    }

    public static getLanguage(): string {
        let lang: string;

        if (navigator.languages && navigator.languages.length) {
            // latest versions of Chrome and Firefox set this correctly
            lang = navigator.languages[0];
        } else {
            // latest versions of Chrome, Firefox, and Safari set this correctly
            lang = navigator.language;
        }
        return lang;
    }
}