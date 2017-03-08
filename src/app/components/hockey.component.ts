import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Staff } from '../staff';
import { Foto } from '../foto';

@Component({
	selector: 'hockey',
	templateUrl: './hockey.component.html'
})
export class HockeyComponent implements OnInit, AfterViewInit {

	constructor (private title: Title) { }

	ngOnInit () {
		this.title.setTitle('Ice Team Sanve - Hockey su ghiaccio');
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}
}