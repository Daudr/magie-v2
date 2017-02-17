import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';

import { Staff } from '../staff';
import { Orario } from '../orario';
import { StaffService } from '../services/staff.service';

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

	constructor(public snackBar: MdSnackBar, public dialog: MdDialog) { }

	ngOnInit() {
		if(window.screen.width < 992) {		// Apre il snackbar se la larghezza del dispositivo e` inferiore a 992px
			this.openSnackBar();
		}
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

		switch (grn.getDay()) {
			default:
				console.log("errore nel reperire giorno.");
			case 0:
				this.giorno = "Domenica";
				break;
			case 1:
				this.giorno = "Lunedì";
				break;
			case 2:
				this.giorno = "Martedì";
				break;
			case 3:
				this.giorno = "Mercoledì";
				break;
			case 4:
				this.giorno = "Giovedì";
				break;
			case 5:
				this.giorno = "Venerdì";
				break;
			case 6:
				this.giorno = "Sabato";
				break;
		}

		switch (grn.getMonth()) {
			default:
				console.log("Errore nel reperire mese.");
				break;
			case 0:
				this.mese = "Gennaio";
				break;
			case 1:
				this.mese = "Febbraio";
				break;
			case 2:
				this.mese = "Marzo";
				break;
			case 10:
				this.mese = "Novembre";
				break;
			case 11:
				this.mese = "Dicembre";
				break;
		}

		return this.giorno + " " + grn.getDate() + " " + this.mese; 
	}
}

@Component({
	providers: [ StaffService ],
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
				<div class="col m12">
					<div class="card light-blue lighten-1">
			            <div class="card-content white-text">
			              	<div class="col s4">
				              <img src={{person.icon}} class="circle responsive-img">
				          	</div>
				          	<span class="card-title">{{person.nome}}</span>
				          	<p class="left-align hide-on-small-only">
				          		<br>
				          		<br>
				          		<br>
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
				          		Email:<br>
				          		{{person.email}}<br>
				          	</p>
			            </div>
			            <div class="card-action center-align">
			              <a href="tel:{{person.telefono}}" class="btn btn-flat light-blue darken-4 white-text waves-effect">Chiama</a>
			              <a href="mailto:{{person.email}}" class="btn btn-flat white-text light-blue darken-4 waves-effect margin-btn" disabled>Invia email</a>
			            </div>
			        </div>
				</div>
			</div>
			<div class="card-panel center-align db-error" *ngIf="!staff">
				<h3>Errore nel caricamento dei contatti</h3>
			</div>
		</div>
	`
})
export class DialogPomeriggio implements OnInit {
	staff: Staff[];

	constructor(private staffService: StaffService) { }

	ngOnInit() {
		this.staffService
			.getCorsiStaff()
			.then((staff: Staff[]) => {
				this.staff = staff.map((staff) => {
					return staff;
				});
			});
	}
}

@Component({
	providers: [ StaffService ],
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
				<div class="col m12">
					<div class="card light-blue lighten-1">
			            <div class="card-content white-text">
			              	<div class="col s4">
				              <img src={{person.icon}} class="circle responsive-img">
				          	</div>
				          	<span class="card-title">{{person.nome}}</span>
				          	<p class="left-align hide-on-small-only">
				          		<br>
				          		<br>
				          		<br>
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
				          		Email:<br>
				          		{{person.email}}<br>
				          	</p>
			            </div>
			            <div class="card-action center-align">
			              <a href="tel:{{person.telefono}}" class="btn btn-flat light-blue darken-4 white-text waves-effect">Chiama</a>
			              <a href="mailto:{{person.email}}" class="btn btn-flat white-text light-blue darken-4 waves-effect margin-btn">Invia email</a>
			            </div>
			        </div>
				</div>
			</div>
			<div class="card-panel center-align db-error" *ngIf="!staff">
				<h3>Errore nel caricamento dei contatti</h3>
			</div>
		</div>
	`
})
export class DialogMattina implements OnInit {
	staff: Staff[];

	constructor(private staffService: StaffService) { }
	
	ngOnInit() {
		this.staffService
			.getCorsiStaff()
			.then((staff: Staff[]) => {
				this.staff = staff.map((staff) => {
					return staff;
				});
			});
	}
}