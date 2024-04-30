import { Injectable } from '@angular/core';

/**
 * CookiesService provides methods for setting, getting, and removing cookies.
 */
@Injectable( {
	providedIn: 'root'
} )
export class CookiesService {

	/**
	 * Sets a cookie with the given name, value, and optional expiration time in days.
	 *
	 * @param {string} name - The name of the cookie.
	 * @param {any} value - The value of the cookie.
	 * @param {number} [days] - The number of days until the cookie expires. If not provided, the cookie expires in 1 year.
	 */
	set ( name: string, value: any, days?: number ): void {
		const date = new Date();
		if ( days ) {
			date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) )
		}
		else {
			date.setFullYear( date.getFullYear() + 1 );
		}
		document.cookie = `${ name }=${ JSON.stringify( value ) };expires=${ date.toUTCString() };path=/;SameSite=Strict;${ location.hostname ? `domain=${ location.hostname.replace( /[^.]+\./, '' ) }` : '' }`;
	}

	/**
	 * Retrieves the value of a cookie with the specified name.
	 *
	 * @param {string} name - The name of the cookie.
	 * @return {any | null} The value of the cookie, or null if the cookie does not exist.
	 */
	get ( name: string ): any | null {
		const value = document.cookie.split( ';' ).find( row => row.trim().startsWith( `${ name }=` ) );
		return value ? JSON.parse( value.split( '=' )[ 1 ] ) : null;
	}

	/**
	 * Removes a cookie with the specified name.
	 *
	 * @param {string} name - The name of the cookie to remove.
	 */
	remove ( name: string ): void {
		this.set( name, '', -1 );
	}
}
