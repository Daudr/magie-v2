import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
	    compiti: "Informazioni generali",
	    disponibilita: "Lun-Ven: 15:00 - 19:00",
	    telefono: "3314504424",
	    email: "mircozago@magiedinverno.it"
		},
		{
			icon: "assets/icons/staff/michele.jpg",
	    nome: "Michele Da Rin",
	    compiti: "Sito web",
	    disponibilita: "Lun-Ven: 18:00 - 19:00",
	    telefono: "3938405607",
	    email: "micheledarin@magiedinverno.it"
		},
		{
			icon: 'assets/icons/staff/renato.jpg',
			nome: "Renato Da Rin",
	    compiti: "Prenotazione turni serali",
	    disponibilita: "Lun-Ven: 15:00 - 19:00",
	    telefono: "0123456789",
	    email: "renatodarin@magiedinverno.it"
		},
		{
			icon: "assets/icons/staff/cristina.jpg",
	    nome: "Cristina Papa",
	    compiti: "Corsi - A.S.D. Ice Team Sanve",
	    disponibilita: "Lun-Ven: 15:30 - 17:30",
	    telefono: "3271652583",
	    email: "cristinapapa@magiedinverno.it"
		},
		{
			icon: 'assets/icons/staff/lara.jpg',
			nome: "Lara Marcon",
	    compiti: "Corsi - A.S.D. Ice Team Sanve",
	    disponibilita: "Lun-Ven: 15:30 - 17:30",
	    telefono: "3471520763",
	    email: "laramarcon@magiedinverno.it"
		},
		{
			icon: "assets/icons/staff/caio.jpg",
			nome: "Caio Zanette",
			compiti: "Compleanni e gonfiabili/area bimbi",
			disponibilita: "Lun-Ven: 15:00 - 19:00",
			telefono: "0123456789",
			email: "claudiozanette@magiedinverno.it"
		}
	];

	constructor(private title: Title, private meta: Meta) { }

	ngOnInit() {
		this.title.setTitle('Magie D\'Inverno - Contatti');
		this.meta.addTags([
			{
				name: 'description', content: 'Contatta l\'amministrazione di Magie D\'Inverno - San Vendemiano per avere tutte le informazioni necessarie'
			},
			{
				name: 'keywords', content: 'magie d\'inverno, san vendemiano, pattinaggio, pista, ghiaccio, hockey, artistico, corsi, bambini, festa, compleanno, concerti, eventi, treviso, veneto, contatti, mappa'
			}
		]);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
}
