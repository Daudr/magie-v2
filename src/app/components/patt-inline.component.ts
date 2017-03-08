import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'patt-inline',
	templateUrl: './patt-inline.component.html'
})
export class PattInlineComponent {
	constructor (private title: Title) { }

	ngOnInit () {
		this.title.setTitle('Ice Team Sanve - Pattinaggio artistico inline');
	}
}