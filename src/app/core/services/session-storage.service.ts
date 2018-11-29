import { Injectable } from '@angular/core';
// Import requires modules from crypto-js
import * as AES from 'crypto-js/aes.js';
import * as encodeUtf8 from 'crypto-js/enc-utf8';

import { LoggerService } from '@app/core/services/logger.service';
import { CommonHelper } from '@app/helpers/index';

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {
    private keyPar: string;

    constructor(private logger: LoggerService) {
        this.keyPar = 'WebAtrivity';
    }

    public set(key: string, value: any, nonEncrypt?: boolean): void {
        if (nonEncrypt) {
            sessionStorage.setItem(key, value);
        } else {
            const ecnryptValue = AES.encrypt(CommonHelper.encodeBase64(value), this.getKeyPar()).toString();
            sessionStorage.setItem(key, ecnryptValue);
        }
    }

    public get(key): string | boolean {
        try {
            const value = sessionStorage.getItem(key);
            if (!value) {
                return false;
            }

            const decryptValue = AES.decrypt(value, this.getKeyPar());
            return value && decryptValue && CommonHelper.decodeBase64(decryptValue.toString(encodeUtf8));
        } catch (error) {
            this.logger.error(error);
            return false;
        }

    }

    public delete(key): void {
        sessionStorage.removeItem(key);
    }

    public clear(): void {
        sessionStorage.clear();
    }

    /**
     * Get a Key par using a static value + timestamp from session start, all of this from a Base64 decode
     *
     * @private
     * @returns {string}
     */
    private getKeyPar(): string {
        const timestamp = sessionStorage.getItem('timestamp');
        let keyPar = CommonHelper.encodeBase64(this.keyPar);
        keyPar += CommonHelper.encodeBase64(parseInt(timestamp, 16));
        return `${keyPar}+${timestamp}`;
    }
}
