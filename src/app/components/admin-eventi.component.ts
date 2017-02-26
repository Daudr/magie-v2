import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

declare var $: any;

@Component({
	selector: 'admin-eventi',
	templateUrl: './admin-eventi.component.html'
})
export class AdminEventiComponent implements OnInit, AfterViewInit{
  events: Eventi[];

  giorno: string;
  mese: string;

  // @Input()
  // evento: Eventi;

  // @Input()
  // createHandler: Function;
  // @Input()
  // updateHandler: Function;
  // @Input()
  // deleteHandler: Function;
  
  constructor (private eventiService: EventiService) { }

  ngOnInit () {
    this.eventiService
    .getEventi()
    .then((events: Eventi[]) => {
      this.events = events.map((events) => {
        return events;
      });
    });
  }

  // creaEvento (evento: Eventi) {
  //   this.eventiService.creaEvento(evento)
  //     .then((nuovoEvento: Eventi) => {
  //       this.createHandler(nuovoEvento);
  //     });
  // }

  // eliminaEvento (eventoID: String): void {
  //   this.eventiService.rimuoviEvento(eventoID)
  //     .then((deletedEventID: String) => {
  //       this.deleteHandler(deletedEventID);
  //     });
  // }

  // aggiornaEvento (evento: Eventi): void {
  //   this.eventiService.aggiornaEvento(evento)
  //     .then((updateEvent: Eventi) => {
  //       this.updateHandler(updateEvent);
  //     })
  // }

  ngAfterViewInit () {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  traduciData(grn: Date): String {

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

    return this.giorno + " " + grn.getDate() + " " + this.mese; 
  }
}