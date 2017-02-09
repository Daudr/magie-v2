import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { StaffService } from '../services/staff.service';

import { Staff } from '../staff';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-contatti',
	templateUrl: `./contatti.component.html`,
})
export class ContattiComponent implements OnInit {

	staff: Staff[];

	constructor(private staffService: StaffService) {
		this.staffService.getStaff()
			.subscribe(staff => {
				this.staff = staff;
			});
	}

	ngOnInit() {
		if(!($('body').hasClass('back_img'))){
			$('body').addClass('back_img');
		}
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

