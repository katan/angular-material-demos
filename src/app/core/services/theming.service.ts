import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { OverlayContainer } from "@angular/cdk/overlay";

import { AppSettings } from '@app/core/settings/index';

@Injectable({
	providedIn: 'root'
})
export class ThemingService {
	public theming$: Observable<string>;
	private themingEmitter: BehaviorSubject<string>;

	constructor(private overlayContainer: OverlayContainer) {
		this.themingEmitter = new BehaviorSubject<string>(AppSettings.defaultTheme);
		this.theming$ = this.themingEmitter.asObservable();
		this.addOverlayThemeClass(AppSettings.defaultTheme);
	}

	public set(theme: string) {
		this.addOverlayThemeClass(theme);
		// Emit the new class
		this.themingEmitter.next(theme);
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
