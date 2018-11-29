import { Injectable } from '@angular/core';
// Import requires modules from crypto-js
import * as encodeUtf8 from 'crypto-js/enc-utf8';
import * as encodeBase64 from 'crypto-js/enc-base64';

@Injectable()
export class CommonHelper {

    constructor() { }

    public static encodeBase64(data: any): string {
        if (data instanceof Object || data instanceof Array) {
            // return window.btoa(JSON.stringify(data));
            const wordArray = encodeUtf8.parse(JSON.stringify(data)); // WordArray object
            return encodeBase64.stringify(wordArray);
        }
        return window.btoa(data);
    }

    public static decodeBase64(data: any): any {
        const wordArray = encodeBase64.parse(data);
        return encodeUtf8.stringify(wordArray);
    }

    public static hexToBase64(hexstring: string): string {
        return btoa(hexstring.match(/\w{2}/g).map(function (a) {
            return String.fromCharCode(parseInt(a, 16));
        }).join(''));
    }
}
