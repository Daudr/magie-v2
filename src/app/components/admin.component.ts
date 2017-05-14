import  { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NewsletterService } from '../services/newsletter.service';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	providers: [NewsletterService]
})
export class AdminComponent implements OnInit, AfterViewInit {
	admin: boolean = true;
	trueAdmin: boolean = false;

	constructor (
		private title: Title,
		private news: NewsletterService
	) { }

	ngOnInit(){
		this.title.setTitle('Admin');
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
	}

	sendMail () {
		this.news.sendMails("Questa è una prova", "Provare è bello");
	}
}
