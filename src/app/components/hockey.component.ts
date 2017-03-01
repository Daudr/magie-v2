import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Staff } from '../staff';
import { Foto } from '../foto';

@Component({
	selector: 'hockey',
	templateUrl: './hockey.component.html'
})
export class HockeyComponent implements OnInit, AfterViewInit {

	constructor () { }

	ngOnInit () { }

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}
}