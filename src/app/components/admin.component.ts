import  { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, AfterViewInit {
	admin: boolean = true;
	trueAdmin: boolean = false;

	constructor (private cookieService: CookieService, private title: Title) { }

	ngOnInit(){
		this.title.setTitle('Admin');
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
		if(!this.cookieService.get('allowAdmin')) {
			this.cookieService.put('allowAdmin', 'true');
		}
	}

	showContent () {
		if(this.cookieService.get('allowAdmin')) {
			if(!($('.hide-admin').hasClass('hide'))) {
				$('.hide-admin').addClass('hide');
			}

			if(!($('.login-admin').hasClass('hide'))) {
				$('.login-admin').addClass('hide');
			}
		} else { this.admin = false; }
	}
}
