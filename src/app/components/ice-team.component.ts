import {Component, OnInit } from '@angular/core';

import { Foto } from '../foto';

declare var $: any;

@Component({
  selector: 'ice-team',
  templateUrl: './ice-team.component.html'
})
export class IceTeamComponent implements OnInit {
	foto: Foto[] = [
		{
			path: '../assets/icons/iceteam/hockey/foto1.jpg'
		},
		{
			path: '../assets/icons/iceteam/hockey/foto2.jpg'
		},
		{
			path: '../assets/icons/iceteam/hockey/foto3.jpg'
		},
		{
			path: '../assets/icons/iceteam/hockey/foto4.jpg'
		}
	];

	ngOnInit () { }
}
