import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App modules
import { SharedModule } from '@app/shared/shared.module';

// App component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		// Angular
		BrowserModule,
		BrowserAnimationsModule,
		// Routing
		AppRoutingModule,
		// App modules
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
