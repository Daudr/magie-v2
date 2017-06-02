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
			icon: '',
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
			icon: '',
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

	constructor(private title: Title) { }

	ngOnInit() {
		this.title.setTitle('Magie D\'Inverno - Contatti');
	}
}
