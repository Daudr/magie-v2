import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

declare var $: any;

@Component({
	selector: 'admin-eventi',
	templateUrl: './admin-eventi.component.html'
})
export class AdminEventiComponent implements OnInit, AfterViewInit {
  nome: string;
  data: string;
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

  creaEvento () {
    if (this.nome || this.data || this.oraInizio ) {
      let event = {
        nome: this.nome,
        data: new Date(new Date(this.data).getFullYear(), new Date(this.data).getMonth(), new Date(this.data).getDay()),
        oraInizio: this.oraInizio,
        oraFine: this.oraFine,
        descrizione: this.descrizione,
        fotoMin: '',
        foto: ''
      }

      this.inserisciEvento(event);
    } else {
      console.log('Informazioni mancanti sul form');
    }
  }

  inserisciEvento (evento: Eventi) {
    this.eventiService.creaEvento(evento)
      .then((nuovoEvento: Eventi) => {
        this.events.push(nuovoEvento);
        console.log('Evento aggiunto');
      });
  }

  eliminaEvento (eventoID: String): void {
    this.eventiService.rimuoviEvento(eventoID)
      .then((deletedEventID: String) => {
        this.deleteHandler(deletedEventID);
      });
  }

  aggiornaEvento (evento: Eventi): void {
    this.eventiService.aggiornaEvento(evento)
      .then((updateEvent: Eventi) => {
        this.updateHandler(updateEvent);
      })
  }

  ngAfterViewInit () {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    this.title.setTitle('Admin eventi');
  }

  goTo(location: string): void {
    window.location.hash = location;
  }

  traduciData(dataEvento: Date): String {
    var grn = new Date(dataEvento);

    switch (grn.getDay()) {
      default:
        console.log("errore nel reperire giorno.");
      case 0:
        this.giorno = "Domenica";
        break;
      case 1:
        this.giorno = "Lunedì";
        break;
      case 2:
        this.giorno = "Martedì";
        break;
      case 3:
        this.giorno = "Mercoledì";
        break;
      case 4:
        this.giorno = "Giovedì";
        break;
      case 5:
        this.giorno = "Venerdì";
        break;
      case 6:
        this.giorno = "Sabato";
        break;
    }

    switch (grn.getMonth()) {
      default:
        console.log("Errore nel reperire mese.");
        this.mese = "Un mese";
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
      case 3:
        this.mese = "Aprile";
        break;
      case 4:
        this.mese = "Maggio";
        break;
      case 5:
        this.mese = "Giugno";
        break;
      case 6:
        this.mese = "Luglio";
        break;
      case 7:
        this.mese = "Agosto";
        break;
      case 8:
        this.mese = "Settembre";
        break;
      case 9:
        this.mese = "Ottobre";
        break;
      case 10:
        this.mese = "Novembre";
        break;
      case 11:
        this.mese = "Dicembre";
        break;
    }

    return this.giorno + " " + grn.getDate() + " " + this.mese + " " + grn.getFullYear();
  }
}
