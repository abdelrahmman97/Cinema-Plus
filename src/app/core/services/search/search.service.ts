import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { SearchResult } from './search.models';

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	private readonly API: string = `${environment.API}/search`;

	constructor(private http: HttpClient) { }

	/**
	 * Performs a search for movies, TV shows and people in a single request.
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchMulti(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/multi?query=${query}&page=${page}`);
	}

	/**
	 * Search for collections.
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchCollection(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/collection?query=${query}&page=${page}`);
	}

	/**
	 * Search for companies .
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchCompany(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/company?query=${query}&page=${page}`);
	}

	/**
	 * Search for keywords.
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchKeyword(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/keyword?query=${query}&page=${page}`);
	}

	/**
	 * Search for movies.
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchMovie(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/movie?query=${query}&page=${page}`);
	}

	/**
	 * Search for people by their name and also known as names.
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchPerson(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/person?query=${query}&page=${page}`);
	}

	/**
	 * Search for TV shows.
	 *
	 * @param {string} query - The search query.
	 * @param {number} [page=1] - The page number to retrieve. Defaults to 1.
	 * @return {Observable<any>} - An Observable that emits the response from the server.
	 */
	searchTV(query: string, page: number = 1): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${this.API}/tv?query=${query}&page=${page}`);
	}
}
