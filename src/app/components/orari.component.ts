import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { Staff } from '../staff';
import { Orario } from '../orario';

@Component({
	selector: 'orari',
	providers: [ MdSnackBar ],
	templateUrl: './orari.component.html'
})
export class OrariComponent  implements OnInit {
	changes: Orario[] = [
		{
			giorno: new Date('2017-02-19T00:00:00.000Z'),
			primoTurno: '9:45 - 11:45',
			secondoTurno: '13:45 - 15:45',
			terzoTurno: '17:10 - 19:30',
		}
	];

	giorno: string;
	mese: string;

	constructor(public snackBar: MdSnackBar, public dialog: MdDialog, private title: Title) { }

	ngOnInit() {
		if(window.screen.width < 992) {		// Apre il snackbar se la larghezza del dispositivo e` inferiore a 992px
			this.openSnackBar();
		}

		this.title.setTitle('Magie D\'Inverno - Orari e Prezzi');
	}

	openDialogPomeriggio() {
		this.dialog.open(DialogPomeriggio, {
				height: '500px',
		});
	}

	openDialogMattina() {
		this.dialog.open(DialogMattina, {
			height: '500px',
		});
	}

	openSnackBar() {
	    this.snackBar.open("Si consiglia di ruotare il dispositivo", "Chiudi", {
	      duration: 6000,
	    });
  	}

  	traduciData(grn: Date): String {				// METODO PER TRADURRE LA DATA
			return new DatePipe('it-IT').transform(grn, 'fullDate');
	}
}

@Component({
	selector: 'dialog-pomeriggio',
	template: `
		<img src="./assets/icons//banner/banner_about.jpg" class="banner-corsi center-align" />
		<h4>Corso di Hockey e Pattinaggio Artistico</h4>
		<div class="center-align">
			<span>
				Da inserire:<br>
				informazioni relative ai corsi (avviamento, artistico, hockey)
			</span>
		</div>
		<div class="contatti row">
			<h4 class="center-align">Per informazioni:</h4>
			<div *ngFor="let person of staff">
				<div class="col m6">
					<div class="card light-blue lighten-1">
			            <div class="card-content white-text">
			              	<div class="col l2 s3">
				              <img src={{person.icon}} class="circle responsive-img">
				          	</div>
				          	<span class="card-title center-align">{{person.nome}}</span>
				          	<p class="right-align hide-on-small-only">
				          		Contattare per: {{person.compiti}}<br>
				          		Contattare: {{person.disponibilita}}<br>
				          		Cel: {{person.telefono}}<br>
				          		Email: {{person.email}}<br>
				          	</p>
				          	<p class="hide-on-med-and-up p-dialog">
				          		<br>
				          		Contattare per:<br>
				          		{{person.compiti}}<br><br>
				          		Contattare:<br>
				          		{{person.disponibilita}}<br><br>
				          		Cellulare:<br>
				          		{{person.telefono}}<br><br>
				          		Email:
				          	</p>
				          	<p class="p-email-dialog hide-on-med-and-up">{{person.email}}<br></p>
			            </div>
			            <div class="card-action center-align">
			              <a href="tel:{{person.telefono}}" class="btn btn-flat light-blue darken-4 white-text waves-effect">Chiama</a>
			              <a href="mailto:{{person.email}}" class="btn btn-flat white-text light-blue darken-4 waves-effect margin-btn" disabled>Invia email</a>
			            </div>
			        </div>
				</div>
			</div>
			<div class="card-panel center-align db-error" *ngIf="!staff">
				<h3 class="hide-on-small-only">Caricamento dei contatti</h3>
				<h4 class="hide-on-med-and-up">Caricamento dei contatti</h4>
			</div>
		</div>
	`
})
export class DialogPomeriggio {
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

	constructor() { }
}

@Component({
	selector: 'dialog-mattina',
	template: `
		<img src="./assets/icons//banner/banner_about.jpg" class="banner-corsi center-align" />
		<h4 class="center-align">Corso di avviamento al pattinaggio su ghiaccio</h4>
		<div class="center-align">
			<span>
				Da inserire:<br>
				informazioni relative ai corsi (avviamento, artistico, hockey)
			</span>
		</div>
		<div class="contatti row">
			<h4 class="center-align">Per informazioni:</h4>
			<div *ngFor="let person of staff">
				<div class="col m6">
					<div class="card light-blue lighten-1">
			            <div class="card-content white-text">
			              	<div class="col l2 s3">
				              <img src={{person.icon}} class="circle responsive-img">
				          	</div>
				          	<span class="card-title center-align">{{person.nome}}</span>
				          	<p class="right-align hide-on-small-only">
				          		Contattare per: {{person.compiti}}<br>
				          		Contattare: {{person.disponibilita}}<br>
				          		Cel: {{person.telefono}}<br>
				          		Email: {{person.email}}<br>
				          	</p>
				          	<p class="hide-on-med-and-up p-dialog">
				          		<br>
				          		Contattare per:<br>
				          		{{person.compiti}}<br><br>
				          		Contattare:<br>
				          		{{person.disponibilita}}<br><br>
				          		Cellulare:<br>
				          		{{person.telefono}}<br><br>
				          		Email:
				          	</p>
				          	<p class="p-email-dialog hide-on-med-and-up">{{person.email}}<br></p>
			            </div>
			            <div class="card-action center-align">
			              <a href="tel:{{person.telefono}}" class="btn btn-flat light-blue darken-4 white-text waves-effect">Chiama</a>
			              <a href="mailto:{{person.email}}" class="btn btn-flat white-text light-blue darken-4 waves-effect margin-btn">Invia email</a>
			            </div>
			        </div>
				</div>
			</div>
		</div>
	`
})
export class DialogMattina {
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

	constructor() { }

}
