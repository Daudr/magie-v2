import {Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Foto } from '../foto';
import { Staff } from '../staff';

declare var $: any;

@Component({
  selector: 'ice-team',
  templateUrl: './ice-team.component.html'
})
export class IceTeamComponent implements OnInit, AfterViewInit {
	staff: Staff[] = [
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
		}
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

	constructor(private title: Title) { }

	ngOnInit () {
		this.title.setTitle('Ice Team Sanve');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

  ngAfterViewInit () {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }
}
