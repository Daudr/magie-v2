import {Component, OnInit } from '@angular/core';

import { StaffService } from '../services/staff.service';

import { Foto } from '../foto';
import { Staff } from '../staff';

declare var $: any;

@Component({
  selector: 'ice-team',
  templateUrl: './ice-team.component.html'
})
export class IceTeamComponent implements OnInit {
	staff: Staff[];
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

	constructor(private staffService: StaffService) { }

	ngOnInit () {
		this.staffService
			.getCorsiStaff()
			.then((staff: Staff[]) => {
				this.staff = staff.map(( staff => {
					return staff;
				}));
			});
	}
}
