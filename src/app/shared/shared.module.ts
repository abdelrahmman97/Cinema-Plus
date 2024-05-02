import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';


@NgModule( {
	declarations: [
		HeaderComponent,
		ClickStopPropagationDirective
	],
	imports: [
		CommonModule,
		RouterModule,
		MenubarModule
	],
	exports: [
		HeaderComponent
	]
} )
export class SharedModule { }
