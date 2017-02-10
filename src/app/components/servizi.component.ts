import { Component, OnInit } from '@angular/core';
import { Parallax, ParallaxConfig } from 'ng2-parallax/commonjs';
import { Servizio } from '../servizio';

declare var $: any;

@Component({
	selector: 'my-servizi',
	templateUrl: `./servizi.component.html`,
})
export class ServiziComponent  {
	servizi: Servizio[] = [
	{
			nome: 'Pista di Pattinaggio',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'A Magie D\'Inverno è presente la più grande pista di pattinaggio del trevigiano: 800mq di ghiaccio vero.' ,
		},
		{
			nome: 'Casette enogastronomiche',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'A Magie D\'Inverno sono presenti numerose casette ceh sapranno accontentarvi in tutto.' ,
		},
		{
			nome: 'Noleggio Pattini',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'A Magie D\'Inverno sono presenti pattini che vanno dal 23 al 49, per tutti.' ,
		},
		{
			nome: 'Taverna on Ice',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'Magie d\'Inverno offre una taverna affittabile a tutti i visitatori, per informazioni rivolgersi a Mirco Zago.',
		},
		{
			nome: 'Gonfiabili e area bimbi',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'A Magie D\'Inverno è presente un capannone riscaldato con al suo interno dei gonfiabili, un area bimbi e un bar, dove grandi e piccini potranno stare insieme e giocare.' ,
		},
		{
			nome: 'Corsi di avviamento al pattinaggio della domenica mattina',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'Magie D\'Inverno offre ai più piccoli la possibilità di imparare a pattinare la domenica mattina' ,
		},
		{
			nome: 'Corsi di avviamento, pattinaggio artistico e hockey del pomeriggio',
			foto: '../../assets/icons/background/back-img.png',
			descrizione: 'Magie d\'Inverno offre ai ragazzi la possibilità di imparare uno sport, poco conosciuto ma non per questo bello, a prezzi completamente convenienti.',
		},
	];

	ngOnInit() {
		if(!($('body').hasClass('back_img'))){
			$('body').addClass('back_img');
		}

		$(document).ready(function(){
	      $('.parallax').parallax();
	    });
	}
}
