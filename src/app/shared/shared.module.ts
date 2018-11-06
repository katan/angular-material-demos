// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import {
	// Navigation
	MatMenuModule,
	MatSidenavModule,
	// Layout
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

@NgModule({
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		/**
         * Material
         */
		// Navigation
		MatMenuModule,
		MatSidenavModule,
		// Layout
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
	declarations: []
})
export class SharedModule { }
