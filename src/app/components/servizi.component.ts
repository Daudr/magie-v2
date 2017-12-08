import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Servizio } from '../servizio';

declare var $: any;

import { SeoService } from '../services/seo.service';

@Component({
	selector: 'my-servizi',
	templateUrl: `./servizi.component.html`,
})
export class ServiziComponent implements OnInit, AfterViewInit {
	servizi: Servizio[] = [
		{
			nome: 'Pista di Pattinaggio',
			foto: '../../assets/icons/services/pista1.jpg',
			descrizione: 'A Magie D\'Inverno è presente la più grande pista di pattinaggio della Provincia di Treviso: 800mq di ghiaccio vero.' ,
			id: 'pista'
		},
		{
			nome: 'Casette enogastronomiche',
			foto: '../../assets/icons/services/casette.jpg',
			descrizione: 'A Magie D\'Inverno sono presenti numerose casette che sapranno deliziare il vostro palato con ottimi piatti, panini e bevande tipiche' ,
			id: 'casette'
		},
		{
			nome: 'Noleggio pattini',
			foto: '../../assets/icons/services/pattini.jpg',
			descrizione: 'A Magie D\'Inverno sono presenti pattini che vanno dal 23 al 49, ovvero per tutti.' ,
			id: 'pattini'
		},
		{
			nome: 'Taverna on Ice',
			foto: '../../assets/icons/services/taverna.jpg',
			descrizione: 'Magie d\'Inverno offre una taverna affittabile a tutti i visitatori, per informazioni rivolgersi a Mirco Zago.',
			id: 'taverna'
		},
		{
			nome: 'Gonfiabili e area bimbi',
			foto: '../../assets/icons/services/gonfiabili.jpg',
			descrizione: 'A Magie D\'Inverno è presente un\'area con al suo interno giochi gonfiabili per i più piccoli ed un bar, area nella quale grandi e piccini potranno stare insieme e divertirsi' ,
			id: 'gonfiabili'
		},
		{
			nome: 'Corsi di avviamento',
			foto: '../../assets/icons/services/corsimattina.jpg',
			descrizione: 'Magie D\'Inverno offre ai più piccoli la possibilità di imparare a pattinare la domenica mattina' ,
			id: 'corsi'
		},
		{
			nome: 'Ice Team Sanve',
			foto: '../../assets/icons/background/back-img.jpg',
			descrizione: 'L\'A.S.D. Ice Team Sanve offre ai ragazzi la possibilità di imparare a pattinare e giocare ad hockey con corsi di avviamento ed allenamenti seguiti da istruttori qualificati e dall\'esperienza internazionale, a prezzi convenienti',
			id: 'iceteam'
		},
	];

	constructor (private title: Title, private seo: SeoService) {}

	ngOnInit() {
		this.title.setTitle('Magie D\'Inverno - Servizi');
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		this.seo.generateTags({
      title: 'Magie D\'Inverno - Servizi',
      description: `Vieni a scoprire cosa ti offre la più grande pista di pattinaggio della provincia di Treviso. Dalle casette enogastronomiche al mercatino natalizio`,
      image: 'https://www.magiedinverno.it/assets/icons/logo/logo_magie.png',
      slug: 'servizi'
    });
	}

	ngAfterViewInit () {
		$(document).ready(function(){
	      $('.parallax').parallax();
	    });
	}
}
