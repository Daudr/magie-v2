import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Staff } from '../staff';
import { StaffService } from '../services/staff.service';

@Component({
	selector: 'hockey',
	templateUrl: './hockey.component.html'
})
export class HockeyComponent implements OnInit, AfterViewInit {
	staff: Staff[];

	constructor (private staffService: StaffService) { }

	ngOnInit () {
		this.staffService
			.getCorsiStaff()
			.then((staff: Staff[]) => {
				this.staff = staff.map(( staff => {
					return staff;
				}));
			});
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}
}