import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvShowCredits, TvShowDetails, TvShowImages, TvShowVideos } from './tv.models';

@Injectable( {
	providedIn: 'root'
} )
export class TvShowService {

	private readonly API: string = `${ environment.API }/tv`;

	constructor (
		private http: HttpClient
	) { }


	getDetails ( series_id: number ): Observable<TvShowDetails> {
		return this.http.get<TvShowDetails>( `${ this.API }/${ series_id }` );
	}

	getCredits ( series_id: number ): Observable<TvShowCredits> {
		return this.http.get<TvShowCredits>( `${ this.API }/${ series_id }/credits` );
	}

	getImages ( series_id: number ): Observable<TvShowImages> {
		return this.http.get<TvShowImages>( `${ this.API }/${ series_id }/images` );
	}

	getVideos ( series_id: number ): Observable<TvShowVideos> {
		return this.http.get<TvShowVideos>( `${ this.API }/${ series_id }/videos` );
	}
}
