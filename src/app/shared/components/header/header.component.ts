import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
} )
export class HeaderComponent implements OnInit {

	items: MenuItem[] | undefined;
	searchVisible: boolean = false;

	ngOnInit (): void {
		this.items = [
			{
				label: 'Home',
				routerLink: "/home"
			},
			{
				label: 'Movies',
				routerLink: "/movies"
			},
			{
				label: 'TV Shows',
				routerLink: '/tv-shows',
			},
			{
				label: 'People',
				routerLink: '/people',
			}
		];
	}

}
