import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { MdSnackBar } from '@angular/material';


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

	m_nome: any;
	m_data: any;
	m_oraInizio: any;
	m_oraFine: any;
	m_descrizione: any;

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

  constructor (private eventiService: EventiService, private title: Title, private snackBar: MdSnackBar) { }

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
  }

	refresh () {
		this.events = null;
		this.eventiService
    .getEventi()
    .then((events: Eventi[]) => {
      this.events = events.map((events) => {
        return events;
      });
    });
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
      .then(() => {
				this.snackBar.open("Evento aggiunto", "Chiudi", {
		      duration: 6000,
		    });
				this.refresh();
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
				this.snackBar.open("Evento eliminato", "Chiudi", {
		      duration: 6000,
		    });
				this.refresh();
      });
  }

  aggiornaEvento (id: any): void {
		var evento = {
			_id: id,
			nome: this.m_nome,
			data: this.m_data,
			oraInizio: this.m_oraInizio,
			oraFine: this.m_oraFine,
			descrizione: this.m_descrizione,
			fotoMin: '',
			foto: ''
		}
		console.log(evento);
    this.eventiService.aggiornaEvento(evento)
      .then((updateEvent: Eventi) => {
				this.snackBar.open("Evento aggiornato", "Chiudi", {
		      duration: 6000,
		    });
				this.refresh();
      })
  }

  goTo(location: string): void {
    window.location.hash = location;
  }

  traduciData(dataEvento: Date): String {
    return new DatePipe('it-IT').transform(dataEvento, 'fullDate');
  }
}
