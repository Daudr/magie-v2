import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Eventi } from '../eventi';

@Component({
  selector: 'my-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  event: Eventi = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log(this.id);
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
