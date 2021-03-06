import { Component, AfterViewInit } from '@angular/core';

import { Staff } from '../staff';
import { Foto } from '../foto';

@Component({
	selector: 'hockey',
	templateUrl: './hockey.component.html'
})
export class HockeyComponent implements AfterViewInit {

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('back-col tab'))) {
			$('.mat-tab-list').addClass('back-col tab');
		}
	}
}
