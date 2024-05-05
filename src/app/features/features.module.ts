import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule( {
	declarations: [
		LandingComponent,
		HomeComponent,
		SliderComponent
	],
	imports: [
		CommonModule,
		FeaturesRoutingModule
	]
} )
export class FeaturesModule { }
