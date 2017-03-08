import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'admin-staff',
	templateUrl: './admin-staff.component.html'
})
export class AdminStaffComponent implements OnInit{
	constructor (private title: Title) {}

	ngOnInit () {
		this.title.setTitle('Admin staff');
	}
}