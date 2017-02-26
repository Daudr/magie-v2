import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'hockey',
	templateUrl: './hockey.component.html'
})
export class HockeyComponent {
	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}
}