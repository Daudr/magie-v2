import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Sponsor } from '../sponsor';

@Component({
	selector: 'credits',
	templateUrl: './credits.component.html'
})
export class CreditsComponent implements OnInit {
	constructor (private title: Title) {}

	ngOnInit () {
		this.title.setTitle('Magie D\'Inverno - Crediti');
	}

	sponsors: Sponsor[] = [
		{
			icon: '../assets/icons/sponsor/ascopiave.jpg'
		},
		{
			icon: '../assets/icons/sponsor/banca.jpg'
		},
		{
			icon: '../assets/icons/sponsor/bibione.jpg'
		},
		{
			icon: '../assets/icons/sponsor/chocomax.jpg'
		},
		{
			icon: '../assets/icons/sponsor/csn.jpg'
		},
		{
			icon: '../assets/icons/sponsor/daros.jpg'
		}/*,
		{
			icon: '../assets/icons/sponsor/epa.jpg'
		},
		{
			icon: '../assets/icons/sponsor/gibus.jpg'
		}*/
	];
}
