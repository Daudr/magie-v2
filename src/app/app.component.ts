import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

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

	public constructor(private titleService: Title, public dialog: MdDialog) { }

	ngOnInit(){
		$(document).ready(function(){
			$('.materialboxed').materialbox();
		});

		this.cookieAccepted = localStorage.getItem('cookieAccepted');
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
  		localStorage.setItem('cookieAccepted', 'true');
  		this.cookieAccepted = localStorage.getItem('cookieAccepted');
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
					<div class="g-recaptcha" data-sitekey="6LcOBSQUAAAAAJbEL7-esngydOF6taoeYO2pNpY2"></div>
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

		this.recaptcha();
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

	recaptcha () {
		(function() {
			    if (!window['___grecaptcha_cfg']) {
			        window['___grecaptcha_cfg'] = {};
			    }
			    ;if (!window['___grecaptcha_cfg']['render']) {
			        window['___grecaptcha_cfg']['render'] = 'onload';
			    }
			    ;window['__google_recaptcha_client'] = true;
			    var po = document.createElement('script');
			    po.type = 'text/javascript';
			    po.async = true;
			    po.src = 'https://www.gstatic.com/recaptcha/api2/r20170629165701/recaptcha__it.js';
			    var elem = document.querySelector('script[nonce]');
			    var nonce = elem && (elem['nonce'] || elem.getAttribute('nonce'));
			    if (nonce) {
			        po.setAttribute('nonce', nonce);
			    }
			    var s = document.getElementsByTagName('script')[0];
			    s.parentNode.insertBefore(po, s);
			}
		)();
	}
}

@Component({
	selector: 'bug-dialog',
	template: `
		<div class="dialog">
			<div class="dialog-title">
				<h4>Installa la nostra web app</h4>
			</div>
			<div class="dialog-content">
				<p>Ecco come installare la nostra app: </p>
				<md-tab-group>
					<md-tab>
						<ng-template md-tab-label>
							1
						</ng-template>
						<h5>Assicurati di usare <a href="http://chrome.google.com" target="_blank" rel="noopener">Google Chrome</a></h5>
						<img src="assets/icons/staff/michele.jpg" alt="App Google Chrome" class="hide-on-med-and-up"/> <!-- Screen Cellulare -->
						<img src="assets/icons/staff/michele.jpg" alt="App Google Chrome" class="hide-on-small-only hide-on-large-only"/> <!-- Screen Tablet -->
						<img src="assets/icons/staff/michele.jpg" alt="App Google Chrome" class="hide-on-med-and-down"/> <!-- Screen Desktop -->
					</md-tab>
					<md-tab>
						<ng-template md-tab-label>
							2
						</ng-template>
						<h5>Apri le impostazioni</h5>
						<img src="" alt=""/> <!-- Screen Cellulare -->
						<img src="" alt=""/> <!-- Screen Tablet -->
						<img src="" alt=""/> <!-- Screen Desktop -->
					</md-tab>
					<md-tab>
						<ng-template md-tab-label>
							3
						</ng-template>
						<h5>Seleziona l'opzione "Aggiungi a schermata Home"</h5>
						<img src="" alt=""/> <!-- Screen Cellulare -->
						<img src="" alt=""/> <!-- Screen Tablet -->
						<img src="" alt=""/> <!-- Screen Desktop -->
					</md-tab>
					<md-tab>
						<ng-template md-tab-label>
							4
						</ng-template>
						<h5>Aspetta che si carichino il nome e l'icona del sito e clicca su "Aggiungi"</h5>
						<img src="" alt=""/> <!-- Screen Cellulare -->
						<img src="" alt=""/> <!-- Screen Tablet -->
						<img src="" alt=""/> <!-- Screen Desktop -->
					</md-tab>
					<md-tab>
						<ng-template md-tab-label>
							5
						</ng-template>
						<h5>Puoi subito iniziare a godere dei vantaggi del sito anche senza una connessione ad internet, buon divertimento!</h5>
						<img src="" alt=""/> <!-- Screen Cellulare -->
						<img src="" alt=""/> <!-- Screen Tablet -->
						<img src="" alt=""/> <!-- Screen Desktop -->
					</md-tab>
				</md-tab-group>
			</div>
		</div>
	`
})
export class BugDialog implements AfterViewInit {

	constructor(public dialogRef: MdDialogRef<BugDialog>) { }

	ngAfterViewInit() { }
}
