import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule( {
	declarations: [
		LandingComponent
	],
	imports: [
		CommonModule,
		FeaturesRoutingModule
	]
} )
export class FeaturesModule { }
