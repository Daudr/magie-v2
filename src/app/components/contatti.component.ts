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
	    compiti: "Informazioni generali intera manifestazione",
	    disponibilita: "Lun-Ven: 15:00 - 17:00",
	    telefono: "3314504424",
	    email: "info@magiedinverno.it"
		},
		{
			icon: "assets/icons/staff/mirco.jpg",
	    nome: "Mirco Zago",
	    compiti: "Corsi / Allenamenti Ice Team Sanve",
	    disponibilita: "Lun-Ven: 15:00 - 17:00",
	    telefono: "3314504424",
	    email: "iceteamsanve@gmail.com"
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
	    telefono: "3471520763",
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

	constructor(private title: Title) { }

	ngOnInit() {
		this.title.setTitle('Magie D\'Inverno - Contatti');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
}
