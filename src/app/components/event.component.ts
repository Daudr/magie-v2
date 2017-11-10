import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

declare var $: any;

@Component({
  selector: 'my-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, AfterViewInit, OnDestroy {
  _id: string;
  private sub: any;
  event: Eventi;

  constructor(private route: ActivatedRoute, private eventiService: EventiService, private title: Title) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this._id = params['id'];
    });

    this.eventiService
     .getEvent(this._id)
     .then((event: Eventi) => {
       this.event = event;

       this.title.setTitle(event.nome + ' | Magie D\'Inverno');
     });
   document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngAfterViewInit() {
    $('.materialboxed').materialbox();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
