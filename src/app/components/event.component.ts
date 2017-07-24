import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';

@Component({
  selector: 'my-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, AfterViewInit, OnDestroy {
  _id: string;
  private sub: any;
  event: Eventi;

  constructor(private route: ActivatedRoute, private eventiService: EventiService, private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this._id = params['id'];
    });

    this.eventiService
     .getEvent(this._id)
     .then((event: Eventi) => {
       this.event = event;

       this.title.setTitle(event.nome);
       this.meta.removeTag('description');
       this.meta.removeTag('keywords');
       this.meta.updateTag({description: event.descrizione});
   		 this.meta.updateTag({keywords: event.nome + ', eventi, san vendemiano, treviso, veneto, manifestazione, magie d\'inverno'});
     });
  }

  ngAfterViewInit() {
    $(document).ready(function(){
			$('.materialboxed').materialbox();
		});
	}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
