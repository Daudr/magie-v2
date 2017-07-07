import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'privacy',
	templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit {

	ngOnInit () {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
}
