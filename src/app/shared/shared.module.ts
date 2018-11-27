// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular html editor
import { AngularEditorModule } from '@kolkov/angular-editor';

// Material
import { LayoutModule } from '@angular/cdk/layout';
import {
	// Navigation
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule,
	// Layout
	MatListModule,
	MatCardModule,
	MatGridListModule,
	MatExpansionModule,
	MatTabsModule,
	// Form Controls
	MatInputModule,
	MatSelectModule,
	MatCheckboxModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSlideToggleModule,
	// Buttons & indicators
	MatButtonModule,
	MatIconModule,
	MatProgressBarModule,
	// Popups / modals
	MatDialogModule,        // Like a modal
	MatSnackBarModule,      // Like a toast
	MatTooltipModule,
	// Data table
	MatTableModule,
	MatSortModule,          // Sort tables
	MatPaginatorModule
} from '@angular/material';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

// Own components
import {
	MainNavComponent,
	MainLayoutComponent,
	FooterComponent,
	ToolbarComponent,
	AccountCardComponent
} from './layouts/index';
// Dialogs
import {
	DialogLogoutComponent
} from './dialogs/index';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { LanguageDropdownComponent } from './layouts/toolbar/language-dropdown/language-dropdown.component';
import { LogoutButtonComponent } from './layouts/toolbar/logout-button/logout-button.component';
import { MenuComponent } from './layouts/sidenav/menu/menu.component';
import { AssignToComponent } from './toasts/assign-to/assign-to.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DialogRemoveItemComponent } from './dialogs/dialog-remove-item/dialog-remove-item.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
	wheelSpeed: 2,
	wheelPropagation: true
};

@NgModule({
	imports: [
		// Angular
		CommonModule,
		RouterModule,
		// Material
		LayoutModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatDialogModule,
		MatMenuModule,
		MatExpansionModule,
		// End Material
		PerfectScrollbarModule
	],
	exports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		/**
         * Material
         */
		// Navigation
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
		// Layout
		MatListModule,
		MatCardModule,
		MatGridListModule,
		MatExpansionModule,
		MatTabsModule,
		// Form Controls
		MatInputModule,
		MatSelectModule,
		MatCheckboxModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		// Buttons & indicators
		MatButtonModule,
		MatIconModule,
		MatProgressBarModule,
		// Popups / modals
		MatDialogModule,        // Like a modal
		MatSnackBarModule,      // Like a toast
		MatTooltipModule,
		// Data table
		MatTableModule,
		MatSortModule,          // Sort tables
		MatPaginatorModule,
		/* End Material */
		AngularEditorModule,
		PerfectScrollbarModule
	],
	declarations: [
		MainNavComponent,
		MainLayoutComponent,
		FooterComponent,
		ToolbarComponent,
		DialogLogoutComponent,
		AccountCardComponent,
		SidenavComponent,
		LanguageDropdownComponent,
		LogoutButtonComponent,
		MenuComponent,
		AssignToComponent,
		BreadcrumbComponent,
		DialogRemoveItemComponent,
		AuthLayoutComponent
	],
	entryComponents: [
		DialogLogoutComponent,
		DialogRemoveItemComponent,
		AssignToComponent
	],
	providers: [
		// scrollbar
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	]
})
export class SharedModule { }
