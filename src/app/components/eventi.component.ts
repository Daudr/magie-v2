import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MdDialog } from '@angular/material';


import { EventiService } from '../services/eventi.service';

import { Eventi } from '../eventi';

declare var $: any;

@Component({
	selector: 'my-eventi',
	templateUrl: './eventi.component.html'
})
export class EventiComponent implements OnInit {
	eventi: Eventi[];
	data: Date;
	i: number;

	constructor(private eventiService: EventiService, public dialog: MdDialog) { }

	ngOnInit() {
		this.eventiService
			.getEventi()
			.then((eventi: Eventi[]) => {
				this.eventi = eventi.map((eventi => {
					return eventi;
				}));
			});
	}

	ngAfterViewInit() {
		if(!($('.md-tab-list').hasClass('light-blue lighten-2 tab'))) {
			$('.md-tab-list').addClass('light-blue lighten-2 tab');
		}
	}

	openEventDialog() {
		this.dialog.closeAll();
		this.dialog.open(EventDialog);
	}
}

@Component({
	selector: 'event-dialog',
	template:`
		<div class="info">
			<img class="dialog-evento" src="../assets/icons//events/evento2801.jpeg">
			<div class="floatr">
				<h3>Il Piave mormorava</h3>
				<p class="des-evento"> 28/01/2017</p>
				<p class="des-evento">Dalle 21:00<p>
				<p class="des-evento">Presso l'area riscaldata del Capannone del Villaggio di Magie d'inverno - San Vendemiano - fronte Municipio</p>
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
				Rievocazione storica della Grande Guerra con letture, canzoni e interventi musicali.<br>
				Ci sarà il Coro "I Borghi" diretto da Nadia Steffenino, inoltre la "Piccola Orchestra Veneta" ed i suoi solisti.
			</span>
		</div>
		<!--
			<div class="foto">

			</div>
		-->
	`
})
export class EventDialog implements AfterViewInit {
	ngAfterViewInit() {
		if(window.screen.height < 700) {
			if(!($('.md-dialog-container').hasClass('dialog-cel'))) {
				$('.md-dialog-container').addClass('dialog-cel');
			}
		}

		// if(window.screen.width > 600) {
		// 	if(!($('.md-dialog-container').hasClass('dialog-width'))) {
		// 		$('.md-dialog-container').addClass('dialog-width');
		// 	}
		// }
	}
}