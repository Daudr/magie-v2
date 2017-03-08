import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'hockey-pista',
	templateUrl: './hockey-pista.component.html'
})
export class HockeyPistaComponent implements OnInit {
	constructor (private title: Title) {}

	ngOnInit () {
		this.title.setTitle('Ice Team Sanve - Hockey inline');
	}
}