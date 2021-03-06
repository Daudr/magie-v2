import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import {
  MdDialog,
  MdDialogRef,
  MdDialogConfig,
  MdSnackBar
} from "@angular/material";
import { FormControl, Validators } from "@angular/forms";
import { Router, NavigationEnd } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { EventiService } from "./services/eventi.service";
import { NewsletterService } from "./services/newsletter.service";

import { Sponsor } from "./sponsor";

declare var $: any;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: "magie-dinverno",
  templateUrl: `./app.component.html`,
  providers: [EventiService]
})
export class AppComponent implements OnInit, OnDestroy {
  dialogRef: MdDialogRef<any>;

  cookieAccepted: any;

  routerSub: Subscription;

  sponsors: Sponsor[] = [
    {
      icon: "../assets/icons/sponsor/ascopiave.jpg"
    },
    {
      icon: "../assets/icons/sponsor/banca.jpg"
    },
    {
      icon: "../assets/icons/sponsor/bibione.jpg"
    },
    {
      icon: "../assets/icons/sponsor/chocomax.jpg"
    },
    {
      icon: "../assets/icons/sponsor/csn.jpg"
    },
    {
      icon: "../assets/icons/sponsor/daros.jpg"
    } /*,
		{
			icon: '../assets/icons/sponsor/epa.jpg'
		},
		{
			icon: '../assets/icons/sponsor/gibus.jpg'
		}*/
  ];

  public constructor(
    private titleService: Title,
    public dialog: MdDialog,
    private meta: Meta,
    private router: Router
  ) {}

  ngOnInit() {
    // if ($(".materialboxed")) {
    //   $(".materialboxed").materialbox();
    // }

    this.cookieAccepted = localStorage.getItem("cookieAccepted");

    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga("set", "page", event.urlAfterRedirects);
        (<any>window).ga("send", "pageview");
      }
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  addNoScroll(sidenav) {
    if (sidenav._isOpened) {
      if (!$("body").hasClass("noscroll")) {
        $("body").addClass("noscroll");
      }
    } else {
      if ($("body").hasClass("noscroll")) {
        $("body").removeClass("noscroll");
      }
    }
  }

  openNews() {
    this.dialogRef = this.dialog.open(NewsDialog);
  }

  openBug() {
    this.dialogRef = this.dialog.open(BugDialog);
  }

  hideCookieBanner() {
    localStorage.setItem("cookieAccepted", "true");
    this.cookieAccepted = localStorage.getItem("cookieAccepted");
  }
}

@Component({
  selector: "news-dialog",
  template: `
    <div class="dialog">
      <div class="container">
        <div class="dialog-title">
          <h4>Rimani sempre aggiornato</h4>
        </div>
        <form (submit)="addReceiver()">
          <div class="dialog-content">
            <br />
            <p class="center-align">
              Per rimanere sempre aggiornato iscriviti alla nostra newsletter:
            </p>
            <md-input-container class="full-width">
              <input
                mdInput
                name="nome"
                [(ngModel)]="nome"
                placeholder="Nome"
                required
              />
            </md-input-container>
            <md-input-container class="full-width">
              <input
                mdInput
                name="cognome"
                [(ngModel)]="cognome"
                placeholder="Cognome"
                required
              />
            </md-input-container>
            <md-input-container class="full-width">
              <input
                mdInput
                placeholder="Email"
                [formControl]="emailFormControl"
                [(ngModel)]="email"
              />
              <md-error *ngIf="emailFormControl.hasError('pattern')">
                Inserisci un indirizzo email valido
              </md-error>
              <md-error *ngIf="emailFormControl.hasError('required')">
                L'email &egrave; <strong>obbligatoria</strong>
              </md-error>
            </md-input-container>
            <!--<p class="center-align">O se preferisci essere contattato per cellulare tramite WhatsApp: </p>
						<md-input-container class="full-width">
							<input type="tel" mdInput name="tel" [(ngModel)]="tel" placeholder="Cellulare" required>
						</md-input-container>-->
            <br />
            <md-checkbox
              name="checkEULA"
              [(ngModel)]="checkEULA"
              class="center-align"
              required
              >Acconsento ai termini.</md-checkbox
            >
          </div>
          <div
            class="g-recaptcha"
            data-sitekey="6LcOBSQUAAAAAJbEL7-esngydOF6taoeYO2pNpY2"
          ></div>
          <br />
          <div class="center-align dialog-actions">
            <input
              type="submit"
              class="btn btn-flat white-text"
              [disabled]="!this.checkEULA"
            />
          </div>
        </form>
      </div>
    </div>
  `,
  providers: [NewsletterService, MdSnackBar]
})
export class NewsDialog implements AfterViewInit {
  nome: string;
  cognome: string;
  email: string;
  tel: string;
  checkEULA = false;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  constructor(
    public dialogRef: MdDialogRef<NewsDialog>,
    public newsService: NewsletterService,
    public snackBar: MdSnackBar
  ) {}

  ngAfterViewInit() {
    if (!$(".md-dialog-container").hasClass("dialog-responsive")) {
      $(".md-dialog-container").addClass("dialog-responsive");
    }

    this.recaptcha();
  }

  addReceiver() {
    if (
      (this.nome && this.cognome && this.email && this.checkEULA) ||
      (this.nome && this.cognome && this.tel && this.checkEULA) ||
      (this.nome && this.cognome && this.email && this.tel && this.checkEULA)
    ) {
      let receiver = {
        nome: this.nome,
        cognome: this.cognome,
        email: this.email,
        tel: this.tel
      };

      this.newsService.addReceiver(receiver);

      this.snackBar.open("Aggiunto alla newsletter", "Chiudi", {
        duration: 3000
      });
      this.dialogRef.close();
    } else {
      this.snackBar.open("Compilare tutti i campi richiesti", "Chiudi", {
        duration: 3000
      });
    }
  }

  recaptcha() {
    (function() {
      if (!window["___grecaptcha_cfg"]) {
        window["___grecaptcha_cfg"] = {};
      }
      if (!window["___grecaptcha_cfg"]["render"]) {
        window["___grecaptcha_cfg"]["render"] = "onload";
      }
      window["__google_recaptcha_client"] = true;
      let po = document.createElement("script");
      po.type = "text/javascript";
      po.async = true;
      po.src =
        "https://www.gstatic.com/recaptcha/api2/r20170629165701/recaptcha__it.js";
      let elem = document.querySelector("script[nonce]");
      let nonce = elem && (elem["nonce"] || elem.getAttribute("nonce"));
      if (nonce) {
        po.setAttribute("nonce", nonce);
      }
      let s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(po, s);
    })();
  }
}

@Component({
  selector: "bug-dialog",
  template: `
    <div class="dialog">
      <div class="dialog-title">
        <h4>Installa la nostra web app</h4>
      </div>
      <div class="dialog-content">
        <p>Ecco come installare la nostra app:</p>
        <md-tab-group>
          <md-tab>
            <ng-template md-tab-label>
              1
            </ng-template>
            <h3 class="center">
              Assicurati di usare
              <a href="http://chrome.google.com" target="_blank" rel="noopener"
                >Google Chrome</a
              >
            </h3>
            <div class="dialog-img">
              <img
                src="assets/icons/istruzioni-app/chrome-cellulare.jpg"
                alt="App Google Chrome"
                class="hide-on-med-and-up"
              />
              <!-- Screen Cellulare -->
              <img
                src="assets/icons/istruzioni-app/chrome-tablet.jpg"
                alt="App Google Chrome"
                class="hide-on-small-only hide-on-large-only"
              />
              <!-- Screen Tablet -->
              <img
                src="assets/icons/istruzioni-app/chrome-desktop.jpg"
                alt="App Google Chrome"
                class="hide-on-med-and-down"
              />
              <!-- Screen Desktop -->
            </div>
          </md-tab>
          <md-tab>
            <ng-template md-tab-label>
              2
            </ng-template>
            <h3 class="hide-on-large-only center">
              Apri le impostazioni e seleziona l'opzione "Aggiungi a schermata
              Home"
            </h3>
            <h3 class="hide-on-med-and-down center">
              Apri le impostazioni e seleziona l'opzione "Aggiungi al
              desktop..."
            </h3>
            <div class="dialog-img">
              <img
                src="assets/icons/istruzioni-app/opzioni-cellulare.jpg"
                alt="Opzioni Google Chrome"
                class="hide-on-med-and-up"
              />
              <!-- Screen Cellulare -->
              <img
                src="assets/icons/istruzioni-app/opzioni-cellulare.jpg"
                alt="Opzioni Google Chrome"
                class="hide-on-small-only hide-on-large-only"
              />
              <!-- Screen Tablet -->
              <img
                src="assets/icons/istruzioni-app/opzioni-desktop.jpg"
                alt="Opzioni Google Chrome"
                class="hide-on-med-and-down"
              />
              <!-- Screen Desktop -->
            </div>
          </md-tab>
          <md-tab>
            <ng-template md-tab-label>
              3
            </ng-template>
            <h3 class="center">
              Aspetta che si carichino il nome e l'icona del sito e clicca su
              "Aggiungi"
            </h3>
            <div class="dialog-img">
              <img
                src="assets/icons/istruzioni-app/aggiungi-cellulare.jpg"
                alt="App Google Chrome"
                class="hide-on-med-and-up"
              />
              <!-- Screen Cellulare -->
              <img
                src="assets/icons/istruzioni-app/aggiungi-cellulare.jpg"
                alt="App Google Chrome"
                class="hide-on-small-only hide-on-large-only"
              />
              <!-- Screen Tablet -->
              <img
                src="assets/icons/istruzioni-app/aggiungi-desktop.jpg"
                alt="App Google Chrome"
                class="hide-on-med-and-down"
              />
              <!-- Screen Desktop -->
            </div>
          </md-tab>
          <md-tab>
            <ng-template md-tab-label>
              4
            </ng-template>
            <h3 class="center">
              Puoi subito iniziare a godere dei vantaggi del sito anche senza
              una connessione ad internet, buon divertimento!
            </h3>
            <div class="dialog-img">
              <img
                src="assets/icons/istruzioni-app/app-cellulare.jpg"
                alt="App Google Chrome"
                class="hide-on-med-and-up"
              />
              <!-- Screen Cellulare -->
              <img
                src="assets/icons/istruzioni-app/app-cellulare.jpg"
                alt="App Google Chrome"
                class="hide-on-small-only hide-on-large-only"
              />
              <!-- Screen Tablet -->
              <img
                src="assets/icons/istruzioni-app/app-desktop.jpg"
                alt="App Google Chrome"
                class="hide-on-med-and-down"
              />
              <!-- Screen Desktop -->
            </div>
          </md-tab>
        </md-tab-group>
      </div>
    </div>
  `
})
export class BugDialog implements AfterViewInit {
  constructor(public dialogRef: MdDialogRef<BugDialog>) {}

  ngAfterViewInit() {}
}
