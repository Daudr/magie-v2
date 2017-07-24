import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { EventiService } from '../services/eventi.service';

import { Eventi } from '../eventi';

declare var $: any;

@Component({
	selector: 'my-eventi',
	templateUrl: './eventi.component.html',
})
export class EventiComponent implements OnInit {
	soonEvents: Eventi[];
	futureEvents: Eventi[];
	pastEvents: Eventi[];
	data: Date;
	i: number;
	tab: any;
	evtdlg: EventDialog;
	dialogRef: MdDialogRef<EventDialog>;

	constructor(private eventiService: EventiService, public dialog: MdDialog, private title: Title) { }

	ngOnInit() {
		this.eventiService
			.getFutureEvents()
			.then((futureEvents: Eventi[]) => {
				this.futureEvents = futureEvents.map((futureEvents) => {
					return futureEvents;
				});
			});

		this.eventiService
			.getPastEvents()
			.then((pastEvents: Eventi[]) =>{
				this.pastEvents = pastEvents.map((pastEvents) => {
					return pastEvents;
				});
			});

		this.eventiService
			.getEventiProssimi()
			.then((soonEvents: Eventi[]) => {
				this.soonEvents = soonEvents.map((soonEvents) => {
					return soonEvents;
				});
				if (this.soonEvents.length == 0) {
					this.tab.selectedIndex = 1;
				}
			});

		this.title.setTitle('Magie D\'Inverno - Eventi');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('back-col tab'))) {
			$('.mat-tab-list').addClass('back-col tab');
		}
	}

	bindTab (tab) {
		this.tab = tab;
	}

	openEventDialog(event: Eventi) {
		this.dialog.closeAll();
		this.dialogRef = this.dialog.open(EventDialog);
		this.dialogRef.componentInstance.event = event;
	}
}

@Component({
	providers: [Eventi],
	selector: 'event-dialog',
	template:`
		<div class="info dialog-event">
			<img class="dialog-evento materialboxed responsive-img" src={{event.foto}}>
			<div>
				<h3>{{event.nome}}</h3>
				<p><strong>Quando: </strong>{{event.data | date:'dd/MM/yyyy'}}</p>
				<p><strong>A che ora: </strong>Dalle {{event.oraInizio}}<p>
				<p><strong>Dove: </strong>Presso {{event.luogo}}</p>
				<div class="map-event">
					<iframe
						frameborder="0"
						class="map-frame-event"
						src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLSt0CtQUeUcRvAz1SS5vNfk&key=AIzaSyBZbraKHNSZ6hXdK3ZPXCe3WHPcP4tdEM8"
						allowfullscreen>
					</iframe>
				</div>
			</div>
		</div>
		<div class="descrizione">
			<h3>Descrizione evento</h3>
			<p class="truncate">{{event.descrizione}}</p>
		</div>
		<div class="row" *ngIf="event.galleria">
			<h3>Galleria evento</h3>
			<div *ngFor="let foto of event.galleria; let i=index">
				<img src={{foto}} class="col l4 m6 s12 materialboxed iceteam" *ngIf="i<3">
			</div>
		</div>
		<div class="center-align">
			<a (click)="eventNavigate(event._id)" class="btn">Maggiori informazioni</a>
		</div>
	`
})
export class EventDialog implements OnInit, AfterViewInit {
	event: Eventi;

	constructor (public dialog: MdDialog, public router: Router) { }

	ngOnInit () { }

	ngAfterViewInit() {
    $(document).ready(function(){
			$('.materialboxed').materialbox();
		});
	}

	eventNavigate (id: string) {
		this.dialog.closeAll();
		this.router.navigate(['/eventi', id]);
	}
}
