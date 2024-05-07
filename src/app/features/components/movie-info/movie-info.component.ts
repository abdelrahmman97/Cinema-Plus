import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../core/services/movie/movie.service';
import { MovieCredits, MovieDetails, MoviePosters, MovieVideos, Video } from '../../../core/services/movie/movie.models';

@Component( {
	selector: 'app-movie-info',
	templateUrl: './movie-info.component.html',
	styleUrl: './movie-info.component.css'
} )
export class MovieInfoComponent implements OnInit {

	movie: MovieDetails = {} as MovieDetails;
	posters: MoviePosters = {} as MoviePosters;
	credits: MovieCredits = {} as MovieCredits;
	videos: MovieVideos = {} as MovieVideos;
	trailerLink: string = '';
	showTrailer: boolean = false;

	constructor (
		private _activeRoute: ActivatedRoute,
		private _movieService: MovieService
	) { }

	ngOnInit (): void {
		const id = this._activeRoute.snapshot.paramMap.get( 'id' );
		this.getMovieInfo( id );
		this.getcredits( id );
		this.getPosters( id );
		this.getVideos( id );
	}

	getMovieInfo ( id: any ) {
		this._movieService.getDetails( id ).subscribe( {
			next: ( response ) => {
				this.movie = response;
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
			},
			error: ( error ) => {
				console.log( error );
			}
		} )
	}

	getVideos ( id: any ) {
		this._movieService.getVideos( id ).subscribe( {
			next: ( response ) => {
				this.videos = response;
				this.getTrailer( this.videos );
			},
			error: ( error ) => {
				console.log( error );
			}
		} );
	}

	getTrailer ( videos: MovieVideos ) {
		const video = videos.results.find( ( v ) => v.type === 'Trailer' && v.name === "Official Trailer" && v.official === true ) ?? {} as Video;
		this.trailerLink = 'https://www.youtube.com/embed/' + video.key;
	}

	toggleTrailer (): void {
		this.showTrailer = !this.showTrailer;
	}
}

