import { Pipe, type PipeTransform } from '@angular/core';

/**
 * Converts minutes to hours and minutes format.
 *
 * @param {number} minutes - The total minutes to convert.
 * @return {string} The formatted hours and minutes string.
 * @example
 *
 * 90 | minutesToHoursAndMinutes;
 * // returns '01h:30m'
*/
@Pipe( {
	name: 'minutesToHoursAndMinutes',
	standalone: true,
} )
export class MinutesToHoursAndMinutesPipe implements PipeTransform {

	transform ( minutes: number ): string {
		const hours = Math.floor( minutes / 60 );
		const remainingMinutes = minutes % 60;
		return `${ hours.toString().padStart( 2, '0' ) }h:${ remainingMinutes.toString().padStart( 2, '0' ) }m`;
	}

}
