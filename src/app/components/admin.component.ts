import  { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, AfterViewInit {
	admin: boolean = true;
	trueAdmin: boolean = false;

	constructor (
		private title: Title
	) { }

	ngOnInit(){
		this.title.setTitle('Admin Magie D\'Inverno');
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}
}
