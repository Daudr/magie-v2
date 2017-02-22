import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';


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

	evtdlg: EventDialog;

	dialogRef: MdDialogRef<EventDialog>;

	constructor(private eventiService: EventiService, public dialog: MdDialog) { }

	ngOnInit() {
		this.eventiService
			.getFutureEvents()
			.then((futureEvents: Eventi[]) => {
				this.futureEvents = futureEvents.map((futureEvents) => {
					console.log("eventi: " + futureEvents);
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
			});
	}

	ngAfterViewInit() {
		if(!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.mat-tab-list').addClass('light-blue lighten-2 tab');
		}
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
		<div class="info">
			<img class="dialog-evento" src={{event.foto}}>
			<div class="floatr">
				<h3>{{event.nome}}</h3>
				<p class="des-evento">{{event.data | date:'dd/MM/yyyy'}}</p>
				<p class="des-evento">Dalle {{event.oraInizio}}<p>
				<p class="des-evento">Presso {{event.luogo}}</p>
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
			<span>
				{{event.descrizione}}
			</span>
		</div>
		<!--
			<div class="foto">

			</div>
		-->
	`
})
export class EventDialog implements AfterViewInit {
	event: Eventi;

	ngAfterViewInit() {
		if(window.screen.height < 700) {
			if(!($('.md-dialog-container').hasClass('dialog-cel'))) {
				$('.md-dialog-container').addClass('dialog-cel');
			}
		}
	}
}
