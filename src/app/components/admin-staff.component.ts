import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'admin-staff',
	templateUrl: './admin-staff.component.html'
})
export class AdminStaffComponent implements OnInit, AfterViewInit {
	constructor (private title: Title) {}

	ngOnInit () { }

	ngAfterViewInit () {
		this.title.setTitle('Admin staff');
	}
}