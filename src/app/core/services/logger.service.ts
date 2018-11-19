import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpErrorResponse } from '@angular/common/http';

const isDebugMode = !environment.production;
// To prevent use of console warnings/errors on production mode, returns a null function
const noop = (): any => undefined;

export abstract class Logger {
    info: any;
    warn: any;
    error: any;
    getMessageError: any;

    invokeConsoleMethod(type: string, args?: any): void { }
}

@Injectable({
    providedIn: 'root'
})
export class LoggerService implements Logger {

    constructor() { }

    /**
     * Check error param type and returns allways a string message error
     *
     * @param {*} error
     * @returns {string}
     */
    public getMessageError(error: any): string {
        if (typeof error === 'string') {
            return error;
        }
        if (error instanceof HttpErrorResponse) {
            if (typeof error.error === 'string') {
                return error.error;
            } else {
                return this.error.message;
            }
        }
        if (error instanceof Object) {
            return error.error || error.MessageError;
        }
        return 'Unknown error';
    }

    get info() {
        if (isDebugMode) {
            return console.info.bind(console);
        }
        return noop;
    }

    get warn() {
        if (isDebugMode) {
            return console.warn.bind(console);
        }
        return noop;
    }

    get error() {
        if (isDebugMode) {
            return console.error.bind(console);
        }
        return noop;
    }

    invokeConsoleMethod(type: string, args?: any): void {
        const logFn: Function = (console)[type] || console.log || undefined;
        logFn.apply(console, [args]);
    }
}
