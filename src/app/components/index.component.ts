import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

import { EventDialog } from './eventi.component';

import { Servizio } from '../servizio';

declare var $: any;

@Component({
	selector: 'my-index',
	templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit, AfterViewInit {
	data: Date;
	giorno: String;
	mese: String;
	numero: number;
	apertura: string;
	chiusura: string;
	aperturaCorsi: string;
	chiusuraCorsi: string;

	dialogRef: MdDialogRef<any>;

	soonEvents: Eventi[];

	servizi: Servizio[] = [
		{
			nome: 'Pista di pattinaggio',
			descrizione: '',
			foto: '../assets/icons/services/pista1.jpg',
		},
		{
			nome: 'Taverna on Ice',
			descrizione: '',
			foto: '../assets/icons/services/taverna.jpg',
		},
		{
			nome: 'Noleggio Pattini',
			descrizione: '',
			foto: '../assets/icons/services/pattini.jpg',
		},
		{
			nome: 'Corsi di pattinaggio',
			descrizione: '',
			foto: '../assets/icons/services/corsimattina.jpg',
		},
	];

	constructor(private eventiService: EventiService, public dialog: MdDialog) { }

	ngOnInit() {
        this.eventiService
            .getEventiProssimi()
            .then((soonEvents: Eventi[]) => {
                this.soonEvents = soonEvents.map((soonEvents) => {
                    return soonEvents;
                });
            });
    }

    ngAfterViewInit () {
    	this.dialogRef = this.dialog.open(DialogAlert);
    }

	isset(str: string): boolean {
		if(str != null)	return true;
		else return false;
	}

	openEventDialog(event: Eventi) {
		this.dialog.closeAll();
		this.dialogRef = this.dialog.open(EventDialog);
		this.dialogRef.componentInstance.event = event;
	}

	isOpen(): string {
		if(this.data >= new Date(2016, 11, 23) || this.data <= new Date(2017, 3, 5))	return 'APERTI';
		else {
			this.apertura = null;		// Se siamo chiusi non apriamo
			this.aperturaCorsi = null;	// Se siamo chiusi i corsi non si fanno
			return 'CHIUSI';
		}
	}

	traduciData(): String {				// METODO PER TRADURRE LA DATA
		this.data = new Date();

		switch (this.data.getDay()) {
			default:
				console.log("errore nel reperire giorno.");
			case 0:
				this.giorno = "Domenica";
				this.apertura = '10:00';
				this.chiusura = '19:00';
				break;
			case 1:
				this.giorno = "Lunedì";
				this.apertura = '15:00';
				this.chiusura = '16:30';
				this.aperturaCorsi = '16:30';
				this.chiusuraCorsi = '18:30';
				break;
			case 2:
				this.giorno = "Martedì";
				this.apertura = '15:00';
				this.chiusura = '16:30';
				this.aperturaCorsi = '16:30';
				this.chiusuraCorsi = '18:30';
				break;
			case 3:
				this.giorno = "Mercoledì";
				this.apertura = '15:00';
				this.chiusura = '16:30';
				this.aperturaCorsi = '16:30';
				this.chiusuraCorsi = '18:30';
				break;
			case 4:
				this.giorno = "Giovedì";
				this.apertura = '15:00';
				this.chiusura = '16:30';
				this.aperturaCorsi = '16:30';
				this.chiusuraCorsi = '18:30';
				break;
			case 5:
				this.giorno = "Venerdì";
				this.apertura = '15:00';
				this.chiusura = '16:30';
				this.aperturaCorsi = '16:30';
				this.chiusuraCorsi = '18:30';
				break;
			case 6:
				this.giorno = "Sabato";
				this.apertura = '14:30';
				this.chiusura = '22:00';
				break;
		}

		switch (this.data.getMonth()) {
			default:
				console.log("Errore nel reperire mese.");
				break;
			case 0:
				this.mese = "Gennaio";
				break;
			case 1:
				this.mese = "Febbraio";
				break;
			case 2:
				this.mese = "Marzo";
				break;
			case 10:
				this.mese = "Novembre";
				break;
			case 11:
				this.mese = "Dicembre";
				break;
		}

		return this.giorno + " " + this.data.getDate() + " " + this.mese; 
	}

	fade_img (): void {
		$(document).ready(function($: any){
			// browser window scroll (in pixels) after which the "back to top" link is shown
			var offset2 = 50,
				offset3 = 100,
				offset4 = 150,
				offset5 = 200,
				offset6 = 250,
				offset7 = 300,
				offset8 = 350,
				offset9 = 400,

				$img_logo = $('.img_logo');

			$(window).scroll(function(){
				( $(this).scrollTop() > offset2 ) ? $img_logo.addClass('opacity-1') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4 opacity-3 opacity-2 opacity-1');
				( $(this).scrollTop() > offset3 ) ? $img_logo.addClass('opacity-2') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4 opacity-3 opacity-2');
				( $(this).scrollTop() > offset4 ) ? $img_logo.addClass('opacity-3') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4 opacity-3');
				( $(this).scrollTop() > offset5 ) ? $img_logo.addClass('opacity-4') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4');
				( $(this).scrollTop() > offset6 ) ? $img_logo.addClass('opacity-5') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5');
				( $(this).scrollTop() > offset7 ) ? $img_logo.addClass('opacity-6') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6');
				( $(this).scrollTop() > offset8 ) ? $img_logo.addClass('opacity-7') : $img_logo.removeClass('opacity-8 opacity-7');
				( $(this).scrollTop() > offset9 ) ? $img_logo.addClass('opacity-8') : $img_logo.removeClass('opacity-8');
			});
		});
	}
}

@Component({
	selector: 'dialog-alert',
	template: `
		<div class="center-align">
			<h4>Benvenuti al sito ufficiale di Magie d'Inverno</h4>
			<div>
				Si avvisano i gentili visitatori che questo sito è attualmente in fase di sviluppo, quindi alcune opzioni sono ancora da implementare, ma sono presenti le cose più essenziali
				come orari e mappa per raggiungerci.<br><br>
				Un cordiale ringraziamento, <br>
				Michele.
        <br><br>
			<div>
		</div>
    <div class="center-align dialog-actions">
      <button md-button (click)="dialogRef.close()">Capito</button>
    </div>
	`
})
export class DialogAlert {
  constructor(public dialogRef: MdDialogRef<DialogAlert>) {}
}
