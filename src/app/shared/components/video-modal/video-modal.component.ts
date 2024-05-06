import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Video } from '../../../core/services/movie/movie.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component( {
	selector: 'app-video-modal',
	templateUrl: './video-modal.component.html',
	styleUrl: './video-modal.component.css'
} )
export class VideoModalComponent implements OnChanges {

	link: SafeResourceUrl = '';
	@Input() video!: Video;
	@Input() open: boolean = false;
	@Output() openChange = new EventEmitter<boolean>();

	constructor ( private domSanitizer: DomSanitizer ) { }

	ngOnChanges (): void {
		const url = 'https://www.youtube.com/embed/' + this.video.key;
		this.link = this.domSanitizer.bypassSecurityTrustResourceUrl( url );
		console.log(this.video);
		console.log( this.link );
	}

	get isModalOpen (): boolean {
		return this.open;
	}

	closeModal (): void {
		this.openChange.emit( false );
	}
}
