import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../core/services/movie/movie.service';
import { MovieCredits, MovieDetails, MoviePosters } from '../../../core/services/movie/movie.models';

@Component( {
	selector: 'app-movie-info',
	templateUrl: './movie-info.component.html',
	styleUrl: './movie-info.component.css'
} )
export class MovieInfoComponent implements OnInit {

	movie: MovieDetails = {} as MovieDetails;
	posters: MoviePosters = {} as MoviePosters;
	credits: MovieCredits = {} as MovieCredits;

	constructor (
		private _activeRoute: ActivatedRoute,
		private _movieService: MovieService
	) { }

	ngOnInit (): void {
		const id = this._activeRoute.snapshot.paramMap.get( 'id' );
		this.getMovieInfo( id );
		this.getcredits( id );
		this.getPosters( id );
	}

	getMovieInfo ( id: any ) {
		this._movieService.getDetails( id ).subscribe( {
			next: ( response ) => {
				this.movie = response;
				console.log( response );
			},
			error: ( error ) => {
				console.log( error );
			}
		} );
	}

	getPosters ( id: any ) {
		this._movieService.getPosters( id ).subscribe( {
			next: ( response ) => {
				this.posters = response;
				console.log( response );
			},
			error: ( error ) => {
				console.log( error );
			}
		} )
	}

	getcredits ( id: any ) {
		this._movieService.getCredits( id ).subscribe( {
			next: ( response ) => {
				this.credits = response;
				console.log( response );
			},
			error: ( error ) => {
				console.log( error );
			}
		} )
	}

}

