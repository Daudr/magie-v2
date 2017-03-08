import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { StaffService } from '../services/staff.service';

import { Staff } from '../staff';

declare var $: any;

@Component({
	selector: 'my-contatti',
	templateUrl: `./contatti.component.html`,
})
export class ContattiComponent implements OnInit {

	staff: Staff[];

	constructor(private staffService: StaffService, private title: Title) { }

	ngOnInit() {
		this.staffService
			.getStaff()
			.then((staff: Staff[]) => {
				this.staff = staff.map((staff => {
					return staff;
				}));
			});

		this.title.setTitle('Magie D\'Inverno - Contatti');
	}
}


/*
	    {
	    	icon: '../icons/staff/icon_michele.png',
	    	nome: 'Mirco Zago',
	    	compiti: 'Informazioni generali',
	    	disponibilita: '15:00 -17:00',
	    	cols: 2,
	    	rows: 1,
	    },
	    {
	    	icon: '../icons/staff/icon_michele.png',
	    	nome: 'Claudio Caio Zanette',
	    	compiti: 'Compleanni e area bimbi',
	    	cols: 2,
	    	rows: 1,
	    },
	    {
	    	icon: '../icons/staff/icon_michele.png',
	    	nome: 'Michele Da Rin',
	    	compiti: 'Informazioni generali, sito web',
	    	cols: 2, 
	    	rows: 1,
	    },
	    {
	    	icon: '../icons/staff/icon_michele.png',
	    	nome: 'Renato Da Rin',
	    	compiti: 'Informazioni generali',
	    	cols: 2,
	    	rows: 1,
	    },
	    {
	    	nome: 'Mappa',
	    	cols: 3,
	    	rows: 3,
	    }
*/

