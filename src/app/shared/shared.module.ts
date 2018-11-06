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
	MatStepperModule,
	// Form Controls
	MatInputModule,
	MatSelectModule,
	MatCheckboxModule,
	MatRadioModule,
	MatDatepickerModule,
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
		MatCardModule,
		MatGridListModule,
		MatExpansionModule,
		MatTabsModule,
		MatStepperModule,
		// Form Controls
		MatInputModule,
		MatSelectModule,
		MatCheckboxModule,
		MatRadioModule,
		MatDatepickerModule,
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
		AccountCardComponent
	],
	entryComponents: [
		DialogLogoutComponent
	]
})
export class SharedModule { }
