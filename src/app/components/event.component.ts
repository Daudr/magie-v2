import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

@Component({
  selector: 'my-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {
  _id: string;
  private sub: any;
  event: Eventi[];

  constructor(private route: ActivatedRoute, private eventiService: EventiService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this._id = params['id']; // (+) converts string '_id' to a number
       console.log(this._id);
       // In a real app: dispatch action to load the details here.
    });

    this.eventiService
     .getFutureEvents()
     .then((event: Eventi[]) => {
       this.event = event.map((event) => {
         return event;
       });
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
