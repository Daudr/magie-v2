import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { EventiService } from './services/eventi.service';
import { NewsletterService } from './services/newsletter.service';

import { Sponsor } from './sponsor';

declare var $: any;

@Component({
	selector: 'magie-dinverno',
	templateUrl: `./app.component.html`,
	providers: [
		EventiService
	]
})
export class AppComponent implements OnInit, AfterViewInit {
	dialogRef: MdDialogRef<any>;

	cookieAccepted: any;

	sponsors: Sponsor[] = [
		{
			icon: '../assets/icons/sponsor/ascopiave.jpg'
		},
		{
			icon: '../assets/icons/sponsor/banca.jpg'
		},
		{
			icon: '../assets/icons/sponsor/bibione.jpg'
		},
		{
			icon: '../assets/icons/sponsor/chocomax.jpg'
		},
		{
			icon: '../assets/icons/sponsor/csn.jpg'
		},
		{
			icon: '../assets/icons/sponsor/daros.jpg'
		}/*,
		{
			icon: '../assets/icons/sponsor/epa.jpg'
		},
		{
			icon: '../assets/icons/sponsor/gibus.jpg'
		}*/
	];

	public constructor(private titleService: Title, public dialog: MdDialog, private cookieService: CookieService) { }

	ngOnInit(){
		$(document).ready(function(){
			$('.materialboxed').materialbox();
		});

		this.cookieAccepted = this.cookieService.get('cookieAccepted');
	}

	ngAfterViewInit () { }

	addNoScroll (sidenav) {
		if(sidenav._isOpened) {
			if(!$('body').hasClass('noscroll')) {
				$('body').addClass('noscroll');
			}
		} else {
			if($('body').hasClass('noscroll')) {
				$('body').removeClass('noscroll')
			}
		}
	}

	openNews() {
    	this.dialogRef = this.dialog.open(NewsDialog);
  	}

  	openBug() {
  		this.dialogRef = this.dialog.open(BugDialog);
  	}

  	hideCookieBanner () {
  		this.cookieService.put('cookieAccepted', 'true', {expires: new Date(2020, 12, 31)});
  		this.cookieAccepted = this.cookieService.get('cookieAccepted');
  	}
}

@Component({
	selector: 'news-dialog',
	template: `
		<div class="dialog">
			<div class="container">
				<div class="dialog-title">
					<h4>Rimani sempre aggiornato</h4>
				</div>
				<form (submit)="addReceiver()">
					<div class="dialog-content">
						<br>
						<p class="center-align">Per rimanere sempre aggiornato iscriviti alla nostra newsletter: </p>
						<md-input-container class="full-width">
							<input mdInput name="nome" [(ngModel)]="nome" placeholder="Nome" required>
						</md-input-container>
						<md-input-container class="full-width">
							<input mdInput name="cognome" [(ngModel)]="cognome" placeholder="Cognome" required>
						</md-input-container>
						<md-input-container class="full-width">
							<input type="email" mdInput name="email" [(ngModel)]="email" placeholder="Email" required>
						</md-input-container>
						<p class="center-align">O se preferisci essere contattato per cellulare tramite WhatsApp: </p>
						<md-input-container class="full-width">
							<input type="tel" mdInput name="tel" [(ngModel)]="tel" placeholder="Cellulare" required>
						</md-input-container>
						<br>
						<md-checkbox name="checkEULA" [(ngModel)]="checkEULA" class="center-align" required>Acconsento ai termini.</md-checkbox>
					</div>
					<!-- <div class="g-recaptcha" data-sitekey="6LcOBSQUAAAAAJbEL7-esngydOF6taoeYO2pNpY2"></div> -->
					<br>
					<div class="center-align dialog-actions">
						<input type="submit" class="btn btn-flat light-blue">
					</div>
				</form>
			</div>
		</div>
	`,
	providers: [NewsletterService]
})
export class NewsDialog implements AfterViewInit {
	nome: string;
	cognome: string;
	email: string;
	tel: string;
	checkEULA: boolean = false;

	constructor(
		public dialogRef: MdDialogRef<NewsDialog>,
		public newsService: NewsletterService
	) { }

	ngAfterViewInit() {
		if(!($('.md-dialog-container').hasClass('dialog-responsive'))) {
			$('.md-dialog-container').addClass('dialog-responsive');
		}
	}

	addReceiver () {
		if (this.checkEULA) {
			let receiver = {
				nome: this.nome,
				cognome: this.cognome,
				email: this.email,
				tel: this.tel
			}

			this.newsService.addReceiver(receiver);

			this.dialogRef.close();
		}
	}
}

@Component({
	selector: 'bug-dialog',
	template: `
		<div class="dialog">
			<div class="center-align">
				<p>
					Funzionalità non ancora implementata del tutto<br>
					Per il momento si prega di inviare un'email a michele@daudr.me
				</p>
				<a class="white-text btn center-align light-blue text-darken-4" href="mailto:michele@daudr.me">Invia email</a>
			</div>
			<!--
			<div class="dialog-title">
				<h4>Segnala un errore del sito</h4>
			</div>
			<div class="dialog-content">
				<md-input-container class="full-width"><input mdInput #name placeholder="Nome:"></md-input-container>
				<md-input-container class="full-width"><input mdInput #email placeholder="Email:"></md-input-container>
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
			<div class="g-recaptcha" data-sitekey="6LcOBSQUAAAAAJbEL7-esngydOF6taoeYO2pNpY2"></div>
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
