import  { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, AfterViewInit {
	
	ngOnInit(){ }

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}

	showContent () {
		if(!($('.hide-admin').hasClass('hide'))) {
			$('.hide-admin').addClass('hide');
		}

		if(!($('.login-admin').hasClass('hide'))) {
			$('.login-admin').addClass('hide');
		}
	}
}
