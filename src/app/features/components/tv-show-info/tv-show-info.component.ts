import { Component, OnInit } from '@angular/core';
import { TvShowCredits, TvShowDetails, TvShowImages, TvShowVideos, Video } from '../../../core/services/tv-show/tv.models';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../../../core/services/tv-show/tv-show.service';

@Component( {
	selector: 'app-tv-show-info',
	templateUrl: './tv-show-info.component.html',
	styleUrl: './tv-show-info.component.css'
} )
export class TvShowInfoComponent implements OnInit {

	tvShow: TvShowDetails = {} as TvShowDetails;
	posters: TvShowImages = {} as TvShowImages;
	credits: TvShowCredits = {} as TvShowCredits;
	videos: TvShowVideos = {} as TvShowVideos;
	trailerLink: string = '';
	showTrailer: boolean = false;

	constructor (
		private _activeRoute: ActivatedRoute,
		private _tvService: TvShowService
	) { }


	ngOnInit (): void {
		const id = this._activeRoute.snapshot.paramMap.get( 'id' );
		this.getMovieInfo( id );
		this.getcredits( id );
		this.getPosters( id );
		this.getVideos( id );
	}

	getMovieInfo ( id: any ) {
		this._tvService.getDetails( id ).subscribe( {
			next: ( response ) => {
				this.tvShow = response;
			},
			error: ( error ) => {
				console.log( error );
			}
		} );
	}

	getPosters ( id: any ) {
		this._tvService.getImages( id ).subscribe( {
			next: ( response ) => {
				this.posters = response;
			},
			error: ( error ) => {
				console.log( error );
			}
		} )
	}

	getcredits ( id: any ) {
		this._tvService.getCredits( id ).subscribe( {
			next: ( response ) => {
				this.credits = response;
			},
			error: ( error ) => {
				console.log( error );
			}
		} )
	}

	getVideos ( id: any ) {
		this._tvService.getVideos( id ).subscribe( {
			next: ( response ) => {
				this.videos = response;
				this.getTrailer( this.videos );
			},
			error: ( error ) => {
				console.log( error );
			}
		} );
	}

	getTrailer ( videos: TvShowVideos ) {
		const video = videos.results.find( ( v ) => v.type === 'Trailer' && v.name === "Official Trailer" && v.official === true ) ?? {} as Video;
		this.trailerLink = 'https://www.youtube.com/embed/' + video.key;
	}

	toggleTrailer (): void {
		this.showTrailer = !this.showTrailer;
	}
}
