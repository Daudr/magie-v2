import { Component, OnInit } from '@angular/core';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';
import { Staff } from '../staff';
import { StaffService } from '../services/staff.service';

@Component({
	selector: 'admin-eventi',
	templateUrl: './admin-eventi.component.html'
})
export class AdminEventiComponent {
  events: Eventi[];
  staff: Staff[];
  
  constructor (eventiService: EventiService, staffService: StaffService) { }

  ngOnInit () {
    this.eventiService
    .getEventi()
    .then((events: Eventi[]) => {
      this.events = events.map((events) => {
        return events;
      });
    });
    
    this.staffService
    .getStaff()
    .then((staff: Staff[]) => {
      this.staff = staff.map((staff) => {
        return staff;
      });
    });
  }
}
