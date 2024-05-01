import { Component } from '@angular/core';
import { CookiesService } from '../../../core/services/cookies/Cookies.service';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
} )
export class HeaderComponent {

	constructor ( private cookieService: CookiesService ) { }
}
