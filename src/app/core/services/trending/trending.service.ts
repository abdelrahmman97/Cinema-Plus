import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrendingResponse } from './trending.models';

@Injectable( {
	providedIn: 'root'
} )
export class TrendingService {

	private readonly API: string = `${ environment.API }/trending`;

	constructor ( private http: HttpClient ) { }

	getAll ( time_window: TimeWindow = "day" ): Observable<TrendingResponse> {
		return this.http.get<TrendingResponse>( `${ this.API }/all/${ time_window }` );
	}

	getMovies ( time_window: TimeWindow = "day" ): Observable<TrendingResponse> {
		return this.http.get<TrendingResponse>( `${ this.API }/movie/${ time_window }` );
	}

	getTV ( time_window: TimeWindow = "day" ): Observable<TrendingResponse> {
		return this.http.get<TrendingResponse>( `${ this.API }/tv/${ time_window }` );
	}

	getPeople ( time_window: TimeWindow = "day" ): Observable<TrendingResponse> {
		return this.http.get<TrendingResponse>( `${ this.API }/person/${ time_window }` );
	}
}

type TimeWindow = "day" | "week";
