import { Component } from '@angular/core';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
} )
export class HeaderComponent {
	links: any[] = [
		{ name: 'Movies', path: 'movies' },
		{ name: 'TV Shows', path: 'tv-shows' },
		{ name: 'People', path: 'people' }
	];
}
