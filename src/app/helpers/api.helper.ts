import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { API, ApiUrl } from '@app/core/settings/api.config';

@Injectable()
export class ApiHelper {
    /**
     * returns api URL -> protocol://API-adress:API-port
     *
     * @static
     * @returns {string}
     */
    public static getApiUrl(excludePort?: boolean): string {
        const urlObj: ApiUrl = environment && ((environment.production && API.URL.production) ||
            (environment.test && API.URL.test) ||
            (environment.development && API.URL.development)) ||
            API.URL.test; // Fallback

        const protocol: string = urlObj.protocol && urlObj.protocol + ':' || window.location.protocol;
        const hostname: string = urlObj.address || window.location.hostname;
        const port: string = urlObj.port && urlObj.port.toString() || window.location.port;

        return excludePort ?
            `${protocol}//${hostname}/${urlObj.URN}/` :
            `${protocol}//${hostname}:${port}/${urlObj.URN}/`;
    }

    /**
     * returns api URN -> URL/API-module/Action/
     *
     * @static
     * @param {string} _module
     * @param {string} _action
     * @returns {string}
     */
    public static getApiUrn(_module: string, _action: string): string {
        const moduleObj = API.MODULE[_module];
        return `${moduleObj.path}/${moduleObj.action[_action]}`;
    }

    public static get(key): any {
        return API[key];
    }
}
