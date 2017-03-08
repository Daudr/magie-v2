import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'patt-art',
	templateUrl: 'patt-art.component.html'
})
export class PattArtComponent implements OnInit {
	constructor (private title: Title) {}

	ngOnInit () {
		this.title.setTitle('Ice Team Sanve - Pattinaggio artistico su ghiaccio');
	}
}