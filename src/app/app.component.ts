import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MdSidenavModule, MdSidenav } from '@angular/material';

import { StaffService } from './services/staff.service';
import { EventiService } from './services/eventi.service';

@Component({
	selector: 'magie-dinverno',
	templateUrl: `./app.component.html`,
	providers: [
		StaffService,
		EventiService
	]
})
export class AppComponent implements OnInit {
	dialogRef: MdDialogRef<any>;
	email: string;
	name: string;

	public constructor(private titleService: Title, public dialog: MdDialog) { }

	public setTitle (newTitle: string) {
		this.titleService.setTitle( newTitle );

		// this.sidenav.toggle();
	}

	ngOnInit(){ }

	openNews() {
    	this.dialogRef = this.dialog.open(NewsDialog);

    	this.dialogRef.afterClosed().subscribe(email => {
    		this.email = email;
	    	console.log(this.email);
	    	this.dialogRef = null;
	    });
  	}

  	openBug() {
  		this.dialogRef = this.dialog.open(BugDialog);
  	}

  	allowAdmin () {
  		console.log("admin allowed");
  	}
}

@Component({
	selector: 'news-dialog',
	template: `
		<div class="dialog">
			<p>Funzionalità non ancotra implementata</p>
			<!--
			<div class="container">
				<div class="dialog-title">
					<h4>Rimani sempre aggiornato</h4>
				</div>
				<div class="dialog-content">
					<p>Per rimanere sempre aggiornato iscriviti alla nostra newsletter: </p>
					<md-input-container class="full-width"><input md-input #name placeholder="Nome e cognome:"></md-input-container>
					<md-input-container class="full-width"><input md-input #email placeholder="Email:"></md-input-container>
				</div>
				<div class="center-align dialog-actions">
					<button md-button (click)="dialogRef.close(name.value, email.value)">Invia</button>
				</div>
			</div>
			-->
		</div>
	`
})
export class NewsDialog implements AfterViewInit { 
	constructor(public dialogRef: MdDialogRef<NewsDialog>) { }

	ngAfterViewInit() {
		if(!($('.md-dialog-container').hasClass('dialog-responsive'))) {
			$('.md-dialog-container').addClass('dialog-responsive');
		}
	}
}

@Component({
	selector: 'bug-dialog',
	template: `
		<div class="dialog">
			<div class="center-align">
				<p>
					Funzionalità non ancotra implementata del tutto<br>
					Per il momento si prega di inviare un'email a michidarin@gmail.com
				</p>
				<a class="white-text btn center-align light-blue text-darken-4" href="mailto:michidarin@gmail.com">Invia email</a>
			</div>
			<!--
			<div class="dialog-title">
				<h4>Segnala un errore del sito</h4>
			</div>
			<div class="dialog-content">
				<md-input-container class="full-width"><input md-input #name placeholder="Nome:"></md-input-container>
				<md-input-container class="full-width"><input md-input #email placeholder="Email:"></md-input-container>
				<br>
				<br>
				Tipo di errore riscontrato:
					<md-select placeholder="Errore">
						<md-option *ngFor="let error of errors" [value]="error.value">
							{{ error.viewValue }}
						</md-option>
					</md-select>
					<br>
					<br>
					<br>
				Dispositivo utilizzato:
					<md-select placeholder="Dispositivo">
						<md-option *ngFor="let device of devices" [value]="device.value">
							{{ device.viewValue }}
						</md-option>
					</md-select>
					<br>
					<br>
					<br>
					<br>
				<div class="input-field">
					<textarea id="textarea1" class="textarea materialize-textarea"></textarea>
					<label for="textarea1">Descrivi l'errore: cosa stavi facendo quando l'hai riscontrato, come ti si è presentato, ecc.</label>
					<br>
				</div>
			</div>
			<div class="center-align dialog-actions">
				<button md-button (click)="dialogRef.close()">Invia</button>
			</div>
			-->
		</div>
	`
})
export class BugDialog implements AfterViewInit {
	errors = [
		{ value: 'graf-err', viewValue: 'Errore Grafico' },
		{ value: 'err-1', viewValue: 'Errore 1' },
		{ value: 'err-2', viewValue: 'Errore 2' }
	];

	devices = [
		{ value: 'pc', viewValue: 'Computer' },
		{ value: 'tablet', viewValue: 'Tablet' },
		{ value: 'phone', viewValue: 'Cellulare' }
	];

	constructor(public dialogRef: MdDialogRef<BugDialog>) { }

	ngAfterViewInit() {
		if(!($('.md-dialog-container').hasClass('dialog-responsive'))) {
			$('.md-dialog-container').addClass('dialog-responsive');
		}
	}
}
