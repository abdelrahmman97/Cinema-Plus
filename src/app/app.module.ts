import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

export function HttpLoaderFactory ( http: HttpClient ) {
	return new TranslateHttpLoader( http, "./assets/i18n/", ".json" );
}

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LoadingBarHttpClientModule,
		LoadingBarRouterModule,
		TranslateModule.forRoot(
			{
				defaultLanguage: 'en',
				loader: {
					provide: TranslateLoader,
					useFactory: HttpLoaderFactory,
					deps: [ HttpClient ]
				}
			}
		),
		AppRoutingModule,
		SharedModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
