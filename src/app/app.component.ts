import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	title = 'Cinema-Plus';

	constructor() { }

	backgroundImageUrls: string[] = [
		'./assets/images/poster-1.jpg',
		'./assets/images/poster-2.jpg',
		'./assets/images/poster-3.jpg',
		'./assets/images/poster-4.jpg'
	];

	backgroundImage: string = this.backgroundImageUrls[0];

	ngOnInit() {
		this.setBackgroundImage();
	}

	setBackgroundImage() {
		const randomIndex = Math.floor(Math.random() * this.backgroundImageUrls.length);
		this.backgroundImage = `url(${this.backgroundImageUrls[randomIndex]})`;
	}

}
