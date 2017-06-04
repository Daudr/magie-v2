import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';


import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

declare var $: any;

@Component({
	selector: 'admin-eventi',
	templateUrl: './admin-eventi.component.html'
})
export class AdminEventiComponent implements OnInit, AfterViewInit {
  nome: string;
  data: Date;
  oraInizio: any;
  oraFine: any;
  descrizione: any;

  events: Eventi[];

  giorno: string;
  mese: string;

  @Input()
  event: Eventi;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private eventiService: EventiService, private title: Title) { }

  ngOnInit () {
    this.eventiService
    .getEventi()
    .then((events: Eventi[]) => {
      this.events = events.map((events) => {
        return events;
      });
    });
  }

	ngAfterViewInit () {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    this.title.setTitle('Admin eventi');
  }

  creaEvento () {
    if (this.nome || this.data || this.oraInizio ) {
      let event = {
        nome: this.nome,
        data: new Date(this.data),
        oraInizio: this.oraInizio,
        oraFine: this.oraFine,
        descrizione: this.descrizione,
        fotoMin: '../assets/icons/other/magie200.png',
        foto: '../assets/icons/other/magie200.png'
      }

      this.inserisciEvento(event);
    } else {
      console.log('Informazioni mancanti nel form');
    }
  }

  inserisciEvento (evento: Eventi) {
    this.eventiService.creaEvento(evento)
      .then((nuovoEvento: Eventi) => {
        this.events.push(nuovoEvento);
      });
  }

  eliminaEvento (evento: Eventi): void {
		console.log(evento);
    this.eventiService.rimuoviEvento(evento._id)
      .then((deletedEvent: Eventi) => {
				let index: number = this.events.indexOf(deletedEvent);
		    if (index !== -1) {
		        this.events.splice(index, 1);
		    }
      });
  }

  aggiornaEvento (evento: Eventi): void {
    this.eventiService.aggiornaEvento(evento)
      .then((updateEvent: Eventi) => {
        this.updateHandler(updateEvent);
      })
  }

  goTo(location: string): void {
    window.location.hash = location;
  }

  traduciData(dataEvento: Date): String {
    return new DatePipe('it-IT').transform(dataEvento, 'fullDate');
  }
}
