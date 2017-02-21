import { Component, OnInit } from '@angular/core';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

@Component({
	selector: 'admin-eventi',
	templateUrl: './admin-eventi.component.html'
})
export class AdminEventiComponent {
  events: Eventi[];
  
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
}
