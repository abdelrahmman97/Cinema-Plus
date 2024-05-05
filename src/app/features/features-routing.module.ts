import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { HomeComponent } from "./components/home/home.component";
import { MovieInfoComponent } from "./components/movie-info/movie-info.component";
import { TvShowInfoComponent } from "./components/tv-show-info/tv-show-info.component";

const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'movie/:id',
		component: MovieInfoComponent
	},
	{
		path: 'tv/:id',
		component: TvShowInfoComponent
	},
	{
		path: '**',
		component: LandingComponent
	}
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ],
} )
export class FeaturesRoutingModule { }
