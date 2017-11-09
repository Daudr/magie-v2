import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
	    compiti: "Informazioni generali - Corsi - Allenamenti Ice Team Sanve",
	    disponibilita: "Lun-Ven: 15:00 - 17:00",
	    telefono: "3314504424",
	    email: "info@magiedinverno.it"
		},
		{
			icon: "assets/icons/staff/michele.jpg",
	    nome: "Michele Da Rin",
	    compiti: "Sito web",
	    disponibilita: "Lun-Ven: 18:00 - 19:00",
	    telefono: "3938405607",
	    email: "michele@daudr.me"
		},
		{
			icon: 'assets/icons/staff/renato.jpg',
			nome: "Renato Da Rin",
	    compiti: "Prenotazione turni serali",
	    disponibilita: "Lun-Ven: 15:00 - 19:00",
	    telefono: "0123456789"
		},
		{
			icon: "assets/icons/staff/cristina.jpg",
	    nome: "Cristina Papa",
	    compiti: "Corsi - Allenamenti Ice Team Sanve - Laboratori didattici",
	    disponibilita: "Lun-Ven: 16:00 - 18:00",
	    telefono: "3271652583",
			email: "iceteamsanve@gmail.com"
		},
		{
			icon: 'assets/icons/staff/lara.jpg',
			nome: "Lara Marcon",
	    compiti: "Corsi - Allenamenti Ice Team Sanve",
	    disponibilita: "Lun-Ven: 17:30 - 19:30",
	    telefono: "3471520763",
			email: "iceteamsanve@gmail.com"
		},
		{
			icon: "assets/icons/staff/caio.jpg",
			nome: "Claudio Zanette",
			compiti: "Compleanni e gonfiabili/area bimbi",
			disponibilita: "Lun-Ven: 15:00 - 19:00",
			telefono: "0123456789"
		}
	];

	constructor(private title: Title) { }

	ngOnInit() {
		this.title.setTitle('Magie D\'Inverno - Contatti');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
}
