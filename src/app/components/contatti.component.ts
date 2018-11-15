import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SeoService } from '../services/seo.service';
import { Staff } from '../staff';

@Component({
	selector: 'my-contatti',
	templateUrl: `./contatti.component.html`,
})
export class ContattiComponent implements OnInit {

	staff: Staff[] = [
		{
			icon: "assets/icons/staff/mirco.jpg",
	    nome: "Mirco Zago",
	    compiti: "Informazioni generali intera manifestazione",
			compiti2: "Corsi / Allenamenti Ice Team Sanve",
	    disponibilita: "Lun-Ven: 15:00 - 17:00",
	    telefono: "3314504424",
	    email: "info@magiedinverno.it",
			email2: "iceteamsanve@gmail.com"
		},
		{
			icon: "assets/icons/staff/cristina.jpg",
	    nome: "Cristina Papa",
	    compiti: "Corsi / Allenamenti Ice Team Sanve / Laboratori didattici",
	    disponibilita: "Lun-Ven: 16:00 - 18:00",
	    telefono: "3271652583",
			email: "iceteamsanve@gmail.com"
		},
		{
			icon: 'assets/icons/staff/lara.jpg',
			nome: "Lara Marcon",
	    compiti: "Corsi / Allenamenti Ice Team Sanve",
	    disponibilita: "Lun-Ven: 17:30 - 19:30",
	    telefono: "3271652583",
			email: "iceteamsanve@gmail.com"
		},
		{
			icon: "assets/icons/staff/caio.jpg",
			nome: "Claudio Zanette",
			compiti: "Compleanni e gonfiabili",
			disponibilita: "Tutti i giorno dopo le 18:00",
			telefono: "3477197575"
		}
	];

	constructor(private title: Title, private seo: SeoService) { }

	ngOnInit() {
		this.title.setTitle('Magie D\'Inverno - Contatti');
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		this.seo.generateTags({
      title: 'Magie D\'Inverno - Contatti',
      description: 'Contatta il team di Magie d\'Inverno per avere tutte le informazioni sulla manifestazione, sugli eventi, sui corsi e sulle feste di compleanno',
      image: 'https://www.magiedinverno.it/assets/icons/logo/logo_magie.png',
      slug: 'contatti'
    });
	}

}
