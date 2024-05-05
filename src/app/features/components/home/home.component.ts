import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../../../core/services/trending/trending.service';
import { TrendingModel, TrendingResponse } from '../../../core/services/trending/trending.models';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
} )
export class HomeComponent implements OnInit {
	trendingList: TrendingModel[] = [];

	constructor (
		private _trendingService: TrendingService
	) { }

	ngOnInit (): void {
		this.getTrending();
	}

	getTrending () {
		this._trendingService.getAll().subscribe( {
			next: ( data: TrendingResponse ) => {
				this.trendingList = data.results;
				console.log( this.trendingList );
			},
			error: ( error: any ) => {
				console.log( error );
			}
		} );
	}

}
