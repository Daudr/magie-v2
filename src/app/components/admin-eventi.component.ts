import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

declare var $: any;

@Component({
	selector: 'admin-eventi',
	templateUrl: './admin-eventi.component.html'
})
export class AdminEventiComponent implements OnInit, AfterViewInit{
  events: Eventi[];

  selectedEvent: Eventi;
  
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

  ngAfterViewInit () {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
