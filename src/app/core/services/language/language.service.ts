import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CookiesService } from '../cookies/Cookies.service';

@Injectable( {
	providedIn: 'root'
} )
export class LanguageService {

	private _languageCookieKey: string = 'language';
	private _defaultLanguage: string = 'en';
	private _language: BehaviorSubject<string>;
	private _language$: Observable<string>;

	constructor (
		private translate: TranslateService,
		private cookiesService: CookiesService
	) {
		this._language = new BehaviorSubject<string>( this.getSavedLanguage() || this._defaultLanguage );
		this._language$ = this._language.asObservable();
		this.setLanguage( this._language.value );
	}

	/**
	 * Returns an Observable that emits the current language.
	 *
	 * @return {Observable<string>} An Observable that emits the current language.
	 */
	get language (): Observable<string> {
		return this._language$;
	}

	/**
	 * Set language value for translation and save it in cookies.
	 *
	 * @param {string} value - The new value for the language property.
	 */
	set language ( value: string ) {
		this._language.next( value );
		this.setLanguage( value );
		this.saveLanguage( value );
	}

	/**
	 * Sets the language for translation.
	 *
	 * @param {string} language - The new language value to set.
	 */
	setLanguage ( language: string ) {
		this.translate.use( language );
	}

	/**
	 * Returns the default language.
	 *
	 * @return {string} The default language.
	 */
	getDefaultLanguage (): string {
		return this._defaultLanguage;
	}

	/**
	 * Change the language of the application.
	 *
	 * @param {string} language - The new language to set.
	 */
	changeLanguage ( language: string ) {
		this.language = language;
	}

	/**
	 * Retrieves the saved language from the cookies service.
	 *
	 * @return {string} The saved language value.
	 */

	private getSavedLanguage (): string {
		return this.cookiesService.get( this._languageCookieKey );
	}

	/**
	 * Saves the specified language in cookies.
	 *
	 * @param {string} language - The language to be saved.
	 */
	private saveLanguage ( language: string ) {
		this.cookiesService.set( this._languageCookieKey, language );
	}

}

