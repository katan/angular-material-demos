import { Injectable } from '@angular/core';

import { CommonHelper } from '@app/core/helpers/index';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	public set(key: string, value: any): void {
		localStorage.setItem(key, CommonHelper.encodeBase64(value));
	}

	public get(key): any {
		const value = localStorage.getItem(key);
		return value && CommonHelper.decodeBase64(value);
	}

	public delete(key): void {
		localStorage.removeItem(key);
	}

	public clear(): void {
		localStorage.clear();
	}
}
