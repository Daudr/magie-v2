import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs/Subscription';

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
	data: Date = new Date();
	giorno: String;
	mese: String;
	numero: number;
	apertura: boolean = false;
	aperturaCorsi: boolean = false;
	viewed: boolean;

	dialogRef: MdDialogRef<any>;

	soonEvents: Eventi[];

	servizi: Servizio[] = [
		{
			nome: 'Pista di pattinaggio',
			descrizione: '',
			foto: '../assets/icons/services/pista1.jpg',
			id: 'pista'
		},
		{
			nome: 'Taverna on Ice',
			descrizione: '',
			foto: '../assets/icons/services/taverna.jpg',
			id: 'taverna'
		},
		{
			nome: 'Taverna Winter',
			descrizione: '',
			foto: '../assets/icons/services/taverna.jpg',
			id: 'taverna'
		},
		{
			nome: 'Taverna Christmas',
			descrizione: '',
			foto: '../assets/icons/services/taverna.jpg',
			id: 'taverna'
		},
		{
			nome: 'Noleggio Pattini',
			descrizione: '',
			foto: '../assets/icons/services/pattini.jpg',
			id: 'pattini'
		},
		{
			nome: 'Corsi Ice Team Sanve',
			descrizione: '',
			foto: '../assets/icons/services/corsimattina.jpg',
			id: 'corsi'
		},
	];

	constructor(
		private eventiService: EventiService,
		public dialog: MdDialog,
		private title: Title) { }

	ngOnInit() {
	  this.eventiService
	      .getEventiProssimi()
	      .then((soonEvents: Eventi[]) => {
	          this.soonEvents = soonEvents.map((soonEvents) => {
	              return soonEvents;
	          });
	      });

	  this.title.setTitle('Magie D\'Inverno - San Vendemiano');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngAfterViewInit () {
  	/*if(!localStorage.getItem('viewed')) {
  		this.dialogRef = this.dialog.open(DialogAlert);
  		localStorage.setItem('viewed', 'true');
  	}*/
  }

	openEventDialog(event: Eventi) {
		this.dialog.closeAll();
		this.dialogRef = this.dialog.open(EventDialog);
		this.dialogRef.componentInstance.event = event;
	}

	isOpen(): String {
		/* if(((this.data >= new Date(2017, 10, 18)) && (this.data <= new Date(2018, 11, 23))) || ((this.data >= new Date(2018, 0, 9)) && (this.data <= new Date(2018, 2, 11)))) {
			if (this.data.getDay() == 6 || this.data.getDay() == 7 ) {
					this.apertura = true;
					this.aperturaCorsi = false;
			} else if (this.data.getDay() == 5) {
				this.apertura = true;
				this.aperturaCorsi = true;
			} else {
				this.aperturaCorsi = true;
			}
			return 'APERTI';
		}
		else {
			this.apertura = null;		// Se siamo chiusi non apriamo
			this.aperturaCorsi = null;	// Se siamo chiusi i corsi non si fanno
			return 'CHIUSI';
		} */
    return 'CHIUSI';
	}

	traduciData(): String {				// METODO PER TRADURRE LA DATA
		return new DatePipe('it-IT').transform(new Date(), 'fullDate');
	}

	fade_img (): void {
		$(document).ready(function($: any){
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
			<!--<h4>Benvenuti al sito ufficiale di Magie d'Inverno</h4>
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
    </div> -->
		<h3 class="red-text">Stiamo tornando!</h3>
		<h4 class="blue-text">Mancano<br>{{message}}<br>alla nuova apertura!</h4>
	`
})
export class DialogAlert implements OnInit, OnDestroy {
	private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: any;
  private subscription: Subscription;
  public message: string;

  constructor(elm: ElementRef, public dialogRef: MdDialogRef<DialogAlert>) {
      this.futureString = elm.nativeElement.getAttribute('inputDate');
  }

  dhms(t) {
      var days, hours, minutes, seconds;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;

      return [
          days + 'G',
          hours + 'H',
          minutes + 'M',
          seconds + 'S'
      ].join(' ');
  }


  ngOnInit() {
      this.future = new Date('11/18/2017'); // Data da raggiungere [18/11/2017]
      this.$counter = IntervalObservable.create(1000).map((x) => {
          this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
          return x;
      });

      this.subscription = this.$counter.subscribe((x) => this.message = this.dhms(this.diff));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
