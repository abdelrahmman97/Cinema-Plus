import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { VideoModalComponent } from './components/video-modal/video-modal.component';


@NgModule( {
	declarations: [
		HeaderComponent,
		ClickStopPropagationDirective,
		VideoModalComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MenubarModule,
	],
	exports: [
		HeaderComponent,
		VideoModalComponent
	]
} )
export class SharedModule { }
