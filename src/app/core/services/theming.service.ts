import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { OverlayContainer } from "@angular/cdk/overlay";

import { AppSettings } from '@app/core/settings/index';
import { LocalStorageService } from '@app/core/services/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class ThemingService {
	public theme: string;
	public theming$: Observable<string>;
	private themingEmitter: BehaviorSubject<string>;

	constructor(private overlayContainer: OverlayContainer, private localStorage: LocalStorageService) {
		this.theme = this.localStorage.get('theme') || AppSettings.defaultTheme;

		this.themingEmitter = new BehaviorSubject<string>(this.theme);
		this.theming$ = this.themingEmitter.asObservable();
		this.addOverlayThemeClass(this.theme);
	}

	public set(theme: string) {
		this.theme = theme;
		this.addOverlayThemeClass(theme);
		this.localStorage.set('theme', theme);
		// Emit the new class
		this.themingEmitter.next(theme);
	}

	public get(): string {
		return this.theme;
	}

	private addOverlayThemeClass(theme: string) {
		// Check if exists a theme
		if (this.overlayContainer.getContainerElement().classList.length > 1) {
			// Get old class theme name to replace for the new theme
			const oldTheme = this.overlayContainer.getContainerElement().classList[this.overlayContainer.getContainerElement().classList.length - 1];
			this.overlayContainer.getContainerElement().classList.replace(oldTheme, theme);
		} else {
			// Add the new theme
			this.overlayContainer.getContainerElement().classList.add(theme);
		}
	}
}
