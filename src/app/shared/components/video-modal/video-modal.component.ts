import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component( {
	selector: 'app-video-modal',
	templateUrl: './video-modal.component.html',
	styleUrl: './video-modal.component.css'
} )
export class VideoModalComponent implements OnChanges {

	link: SafeResourceUrl = '';
	@Input() url: string = '';
	@Input() open: boolean = false;
	@Output() openChange = new EventEmitter<boolean>();

	constructor ( private domSanitizer: DomSanitizer ) { }

	ngOnChanges (): void {
		this.link = this.domSanitizer.bypassSecurityTrustResourceUrl( this.url );
	}

	get isModalOpen (): boolean {
		return this.open;
	}

	closeModal (): void {
		this.openChange.emit( false );
	}
}
