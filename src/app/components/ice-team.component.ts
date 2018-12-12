import {Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Foto } from '../foto';
import { Staff } from '../staff';

import { SeoService } from '../services/seo.service';

declare var $: any;

@Component({
  selector: 'ice-team',
  templateUrl: './ice-team.component.html'
})
export class IceTeamComponent implements OnInit, AfterViewInit {
	staff: Staff[] = [
    {
			icon: "assets/icons/staff/mirco.jpg",
	    nome: "Presidente Mirco Zago",
	    compiti: "Corsi / Allenamenti Ice Team Sanve",
      disponibilita: "Lun-Ven: 16:00 - 18:00",
      telefono: "3314504424",
	    email: "iceteamsanve@gmail.com"
		},
		/* {
			icon: "assets/icons/staff/cristina.jpg",
	    nome: "Vicepresidente Cristina Papa",
	    compiti: "Corsi / Allenamenti Ice Team Sanve / Laboratori didattici",
	    disponibilita: "Lun-Ven: 16:00 - 18:00",
	    telefono: "3271652583",
			email: "iceteamsanve@gmail.com"
		},
		{
			icon: 'assets/icons/staff/lara.jpg',
			nome: "Segretaria Lara Marcon",
	    compiti: "Corsi / Allenamenti Ice Team Sanve",
	    disponibilita: "Lun-Ven: 17:30 - 19:30",
	    telefono: "3471520763",
			email: "iceteamsanve@gmail.com"
		}, */
  ];

	foto: Foto[] = [
		{
			path: '../assets/icons/iceteam/hockey/foto1.jpg'
		},
		{
			path: '../assets/icons/iceteam/hockey/foto2.jpg'
		},
		{
			path: '../assets/icons/iceteam/hockey/foto3.jpg'
		},
		{
			path: '../assets/icons/iceteam/hockey/foto4.jpg'
		}
	];

	constructor(private title: Title, private seo: SeoService) { }

	ngOnInit () {
		this.title.setTitle('Ice Team Sanve');
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    this.seo.generateTags({
      title: 'Ice Team Sanve',
      description: `L'Ice Team Sanve è l'unica realtà sportiva nella Provincia di Treviso che dà la possibilità di dare continuità, in modi diversi, a pattinare durante l'intero anno.`,
      image: 'https://www.magiedinverno.it/assets/icons/logo/logo_iceteam_n.png',
      slug: 'iceteam'
    });
	}

  ngAfterViewInit () {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }
}
