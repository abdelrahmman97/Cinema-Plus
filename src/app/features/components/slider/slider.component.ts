import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { TrendingModel } from '../../../core/services/trending/trending.models';
import { Subscription, interval } from 'rxjs';

@Component( {
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrl: './slider.component.css'
} )
export class SliderComponent implements OnChanges, OnDestroy {

	@Input() items: TrendingModel[] = [];
	@Input() itemsNumber: number = 4;
	newItems: TrendingModel[] = [];
	currentIndex: number = 0;
	currentItem: TrendingModel | null = null;
	intervalSubscription: Subscription | null = null;
	playing: boolean = true;

	constructor () { }

	ngOnChanges ( changes: SimpleChanges ): void {
		this.updateSlider();
		this.startInterval();
	}

	next () {
		this.currentIndex = this.currentIndex < this.itemsNumber - 1 ? this.currentIndex + 1 : 0;
		this.currentItem = this.items[ this.currentIndex ];
	}

	previous () {
		this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.itemsNumber - 1;
		this.currentItem = this.items[ this.currentIndex ];
	}

	showSlide ( slide: number ) {
		this.currentIndex = slide;
		this.currentItem = this.items[ this.currentIndex ];
		this.startInterval();
	}

	playPause () {
		this.playing = !this.playing;
		if ( this.playing ) {
			this.startInterval();
		} else {
			this.stopInterval();
		}
	}

	private updateSlider (): void {
		this.newItems = this.items.slice( 0, this.itemsNumber );
		this.currentItem = this.items[ 0 ];
	}

	private startInterval (): void {
		this.stopInterval();
		if ( this.playing ) {
			this.intervalSubscription = interval( 4000 ).subscribe( () => {
				this.next();
			} );
		}
	}

	private stopInterval (): void {
		if ( this.intervalSubscription ) {
			this.intervalSubscription.unsubscribe();
			this.intervalSubscription = null;
		}
	}

	ngOnDestroy (): void {
		if ( this.intervalSubscription ) {
			this.intervalSubscription.unsubscribe();
		}
	}
}
