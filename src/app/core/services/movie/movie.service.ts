import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCredits, MovieDetails, MoviePosters } from './movie.models';
import { environment } from '../../../../environment/environment';

@Injectable( {
	providedIn: 'root'
} )
export class MovieService {

	private readonly API: string = `${ environment.API }/movie`;

	constructor (
		private http: HttpClient
	) { }

	getDetails ( movie_id: number ): Observable<MovieDetails> {
		return this.http.get<MovieDetails>( `${ this.API }/${ movie_id }` );
	}

	getCredits ( movie_id: number ): Observable<MovieCredits> {
		return this.http.get<MovieCredits>( `${ this.API }/${ movie_id }/credits` );
	}

	getPosters ( movie_id: number ): Observable<MoviePosters> {
		return this.http.get<MoviePosters>( `${ this.API }/${ movie_id }/images` );
	}
}
