// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
		MatMenuModule
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
		AssignToComponent
	],
	entryComponents: [
		DialogLogoutComponent,
		AssignToComponent
	]
})
export class SharedModule { }
