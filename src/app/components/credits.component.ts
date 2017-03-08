import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'credits',
	templateUrl: './credits.component.html'
})
export class CreditsComponent implements OnInit {
	constructor (private title: Title) {}

	ngOnInit () {
		this.title.setTitle('Magie D\'Inverno - Crediti');
	}
}