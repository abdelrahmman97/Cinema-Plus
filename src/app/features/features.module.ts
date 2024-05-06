import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { TvShowInfoComponent } from './components/tv-show-info/tv-show-info.component';
import { MinutesToHoursAndMinutesPipe } from "../core/pipes/minutesToHoursAndMinutes.pipe";
import { SharedModule } from '../shared/shared.module';

@NgModule( {
	declarations: [
		LandingComponent,
		HomeComponent,
		SliderComponent,
		MovieInfoComponent,
		TvShowInfoComponent
	],
	imports: [
		CommonModule,
		FeaturesRoutingModule,
		MinutesToHoursAndMinutesPipe,
		SharedModule
	]
} )
export class FeaturesModule { }
