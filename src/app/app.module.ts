import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { httpInterceptor } from './core/interceptor/http.interceptor';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';

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
		ToastrModule.forRoot( {
			closeButton: true,
			tapToDismiss: false,
			iconClasses: {
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning',
			}
		} ),
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
		CoreModule,
		SharedModule,
		FeaturesModule
	],
	providers: [
		provideHttpClient( withInterceptors( [ httpInterceptor ] ) )
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
