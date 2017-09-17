var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { EventiService } from './services/eventi.service';
import { NewsletterService } from './services/newsletter.service';
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, dialog, meta) {
        this.titleService = titleService;
        this.dialog = dialog;
        this.meta = meta;
        this.sponsors = [
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
            } /*,
                {
                    icon: '../assets/icons/sponsor/epa.jpg'
                },
                {
                    icon: '../assets/icons/sponsor/gibus.jpg'
                }*/
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        this.cookieAccepted = localStorage.getItem('cookieAccepted');
    };
    AppComponent.prototype.ngAfterViewInit = function () { };
    AppComponent.prototype.addNoScroll = function (sidenav) {
        if (sidenav._isOpened) {
            if (!$('body').hasClass('noscroll')) {
                $('body').addClass('noscroll');
            }
        }
        else {
            if ($('body').hasClass('noscroll')) {
                $('body').removeClass('noscroll');
            }
        }
    };
    AppComponent.prototype.openNews = function () {
        this.dialogRef = this.dialog.open(NewsDialog);
    };
    AppComponent.prototype.openBug = function () {
        this.dialogRef = this.dialog.open(BugDialog);
    };
    AppComponent.prototype.hideCookieBanner = function () {
        localStorage.setItem('cookieAccepted', 'true');
        this.cookieAccepted = localStorage.getItem('cookieAccepted');
    };
    AppComponent = __decorate([
        Component({
            selector: 'magie-dinverno',
            templateUrl: "./app.component.html",
            providers: [
                EventiService
            ]
        }),
        __metadata("design:paramtypes", [Title, MdDialog, Meta])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
var NewsDialog = /** @class */ (function () {
    function NewsDialog(dialogRef, newsService, snackBar) {
        this.dialogRef = dialogRef;
        this.newsService = newsService;
        this.snackBar = snackBar;
        this.checkEULA = false;
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(EMAIL_REGEX)
        ]);
    }
    NewsDialog.prototype.ngAfterViewInit = function () {
        if (!($('.md-dialog-container').hasClass('dialog-responsive'))) {
            $('.md-dialog-container').addClass('dialog-responsive');
        }
        this.recaptcha();
    };
    NewsDialog.prototype.addReceiver = function () {
        if ((this.nome && this.cognome && this.email && this.checkEULA) || (this.nome && this.cognome && this.tel && this.checkEULA) || (this.nome && this.cognome && this.email && this.tel && this.checkEULA)) {
            var receiver = {
                nome: this.nome,
                cognome: this.cognome,
                email: this.email,
                tel: this.tel
            };
            this.newsService.addReceiver(receiver);
            this.snackBar.open("Aggiunto alla newsletter", "Chiudi", {
                duration: 3000,
            });
            this.dialogRef.close();
        }
        else {
            this.snackBar.open("Compilare tutti i campi richiesti", "Chiudi", {
                duration: 3000,
            });
        }
    };
    NewsDialog.prototype.recaptcha = function () {
        (function () {
            if (!window['___grecaptcha_cfg']) {
                window['___grecaptcha_cfg'] = {};
            }
            ;
            if (!window['___grecaptcha_cfg']['render']) {
                window['___grecaptcha_cfg']['render'] = 'onload';
            }
            ;
            window['__google_recaptcha_client'] = true;
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
        })();
    };
    NewsDialog = __decorate([
        Component({
            selector: 'news-dialog',
            template: "\n\t\t<div class=\"dialog\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"dialog-title\">\n\t\t\t\t\t<h4>Rimani sempre aggiornato</h4>\n\t\t\t\t</div>\n\t\t\t\t<form (submit)=\"addReceiver()\">\n\t\t\t\t\t<div class=\"dialog-content\">\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<p class=\"center-align\">Per rimanere sempre aggiornato iscriviti alla nostra newsletter: </p>\n\t\t\t\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t\t\t\t<input mdInput name=\"nome\" [(ngModel)]=\"nome\" placeholder=\"Nome\" required>\n\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t\t\t\t<input mdInput name=\"cognome\" [(ngModel)]=\"cognome\" placeholder=\"Cognome\" required>\n\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t<md-input-container class=\"full-width\">\n              <input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"email\">\n              <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n                Inserisci un indirizzo email valido\n              </md-error>\n              <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                L'email &egrave; <strong>obbligatoria</strong>\n              </md-error>\n            </md-input-container>\n\t\t\t\t\t\t<!--<p class=\"center-align\">O se preferisci essere contattato per cellulare tramite WhatsApp: </p>\n\t\t\t\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t\t\t\t<input type=\"tel\" mdInput name=\"tel\" [(ngModel)]=\"tel\" placeholder=\"Cellulare\" required>\n\t\t\t\t\t\t</md-input-container>-->\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<md-checkbox name=\"checkEULA\" [(ngModel)]=\"checkEULA\" class=\"center-align\" required>Acconsento ai termini.</md-checkbox>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"g-recaptcha\" data-sitekey=\"6LcOBSQUAAAAAJbEL7-esngydOF6taoeYO2pNpY2\"></div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"center-align dialog-actions\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-flat white-text\" [disabled]=\"!this.checkEULA\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t",
            providers: [NewsletterService, MdSnackBar]
        }),
        __metadata("design:paramtypes", [MdDialogRef,
            NewsletterService,
            MdSnackBar])
    ], NewsDialog);
    return NewsDialog;
}());
export { NewsDialog };
var BugDialog = /** @class */ (function () {
    function BugDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    BugDialog.prototype.ngAfterViewInit = function () { };
    BugDialog = __decorate([
        Component({
            selector: 'bug-dialog',
            template: "\n\t\t<div class=\"dialog\">\n\t\t\t<div class=\"dialog-title\">\n\t\t\t\t<h4>Installa la nostra web app</h4>\n\t\t\t</div>\n\t\t\t<div class=\"dialog-content\">\n\t\t\t\t<p>Ecco come installare la nostra app: </p>\n\t\t\t\t<md-tab-group>\n\t\t\t\t\t<md-tab>\n\t\t\t\t\t\t<ng-template md-tab-label>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<h3 class=\"center\">Assicurati di usare <a href=\"http://chrome.google.com\" target=\"_blank\" rel=\"noopener\">Google Chrome</a></h3>\n\t\t\t\t\t\t<div class=\"dialog-img\">\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/chrome-cellulare.jpg\" alt=\"App Google Chrome\" class=\"hide-on-med-and-up\"/> <!-- Screen Cellulare -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/chrome-tablet.jpg\" alt=\"App Google Chrome\" class=\"hide-on-small-only hide-on-large-only\"/> <!-- Screen Tablet -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/chrome-desktop.jpg\" alt=\"App Google Chrome\" class=\"hide-on-med-and-down\"/> <!-- Screen Desktop -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</md-tab>\n\t\t\t\t\t<md-tab>\n\t\t\t\t\t\t<ng-template md-tab-label>\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<h3 class=\"hide-on-large-only center\">Apri le impostazioni e seleziona l'opzione \"Aggiungi a schermata Home\"</h3>\n\t\t\t\t\t\t<h3 class=\"hide-on-med-and-down center\">Apri le impostazioni e seleziona l'opzione \"Aggiungi al desktop...\"</h3>\n\t\t\t\t\t\t<div class=\"dialog-img\">\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/opzioni-cellulare.jpg\" alt=\"Opzioni Google Chrome\" class=\"hide-on-med-and-up\"/> <!-- Screen Cellulare -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/opzioni-cellulare.jpg\" alt=\"Opzioni Google Chrome\" class=\"hide-on-small-only hide-on-large-only\"/> <!-- Screen Tablet -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/opzioni-desktop.jpg\" alt=\"Opzioni Google Chrome\" class=\"hide-on-med-and-down\"/> <!-- Screen Desktop -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</md-tab>\n\t\t\t\t\t<md-tab>\n\t\t\t\t\t\t<ng-template md-tab-label>\n\t\t\t\t\t\t\t3\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<h3 class=\"center\">Aspetta che si carichino il nome e l'icona del sito e clicca su \"Aggiungi\"</h3>\n\t\t\t\t\t\t<div class=\"dialog-img\">\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/aggiungi-cellulare.jpg\" alt=\"App Google Chrome\" class=\"hide-on-med-and-up\"/> <!-- Screen Cellulare -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/aggiungi-cellulare.jpg\" alt=\"App Google Chrome\" class=\"hide-on-small-only hide-on-large-only\"/> <!-- Screen Tablet -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/aggiungi-desktop.jpg\" alt=\"App Google Chrome\" class=\"hide-on-med-and-down\"/> <!-- Screen Desktop -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</md-tab>\n\t\t\t\t\t<md-tab>\n\t\t\t\t\t\t<ng-template md-tab-label>\n\t\t\t\t\t\t\t4\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<h3 class=\"center\">Puoi subito iniziare a godere dei vantaggi del sito anche senza una connessione ad internet, buon divertimento!</h3>\n\t\t\t\t\t\t<div class=\"dialog-img\">\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/app-cellulare.jpg\" alt=\"App Google Chrome\" class=\"hide-on-med-and-up\"/> <!-- Screen Cellulare -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/app-cellulare.jpg\" alt=\"App Google Chrome\" class=\"hide-on-small-only hide-on-large-only\"/> <!-- Screen Tablet -->\n\t\t\t\t\t\t\t<img src=\"assets/icons/istruzioni-app/app-desktop.jpg\" alt=\"App Google Chrome\" class=\"hide-on-med-and-down\"/> <!-- Screen Desktop -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</md-tab>\n\t\t\t\t</md-tab-group>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [MdDialogRef])
    ], BugDialog);
    return BugDialog;
}());
export { BugDialog };
