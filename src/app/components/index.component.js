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
import { MdDialog, MdDialogRef } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { EventiService } from '../services/eventi.service';
import { EventDialog } from './eventi.component';
var IndexComponent = /** @class */ (function () {
    function IndexComponent(eventiService, dialog, title) {
        this.eventiService = eventiService;
        this.dialog = dialog;
        this.title = title;
        this.data = new Date();
        this.servizi = [
            {
                nome: 'Pista di pattinaggio',
                descrizione: '',
                foto: '../assets/icons/services/pista1.jpg',
                id: 'pista'
            },
            {
                nome: 'Taverna on Ice',
                descrizione: '',
                foto: '../assets/icons/services/taverna.jpg',
                id: 'taverna'
            },
            {
                nome: 'Noleggio Pattini',
                descrizione: '',
                foto: '../assets/icons/services/pattini.jpg',
                id: 'pattini'
            },
            {
                nome: 'Corsi di pattinaggio',
                descrizione: '',
                foto: '../assets/icons/services/corsimattina.jpg',
                id: 'corsi'
            },
        ];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventiService
            .getEventiProssimi()
            .then(function (soonEvents) {
            _this.soonEvents = soonEvents.map(function (soonEvents) {
                return soonEvents;
            });
        });
        this.title.setTitle('Magie D\'Inverno - Home');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        /*if(!localStorage.getItem('viewed')) {
            this.dialogRef = this.dialog.open(DialogAlert);
            localStorage.setItem('viewed', 'true');
        }*/
    };
    IndexComponent.prototype.openEventDialog = function (event) {
        this.dialog.closeAll();
        this.dialogRef = this.dialog.open(EventDialog);
        this.dialogRef.componentInstance.event = event;
    };
    IndexComponent.prototype.isOpen = function () {
        if ((this.data >= new Date(2016, 11, 23)) && (this.data <= new Date(2017, 3, 5))) {
            return 'APERTI';
        }
        else {
            this.apertura = null; // Se siamo chiusi non apriamo
            this.aperturaCorsi = null; // Se siamo chiusi i corsi non si fanno
            return 'CHIUSI';
        }
    };
    IndexComponent.prototype.traduciData = function () {
        return new DatePipe('it-IT').transform(new Date(), 'fullDate');
    };
    IndexComponent.prototype.fade_img = function () {
        $(document).ready(function ($) {
            var offset2 = 50, offset3 = 100, offset4 = 150, offset5 = 200, offset6 = 250, offset7 = 300, offset8 = 350, offset9 = 400, $img_logo = $('.img_logo');
            $(window).scroll(function () {
                ($(this).scrollTop() > offset2) ? $img_logo.addClass('opacity-1') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4 opacity-3 opacity-2 opacity-1');
                ($(this).scrollTop() > offset3) ? $img_logo.addClass('opacity-2') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4 opacity-3 opacity-2');
                ($(this).scrollTop() > offset4) ? $img_logo.addClass('opacity-3') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4 opacity-3');
                ($(this).scrollTop() > offset5) ? $img_logo.addClass('opacity-4') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5 opacity-4');
                ($(this).scrollTop() > offset6) ? $img_logo.addClass('opacity-5') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6 opacity-5');
                ($(this).scrollTop() > offset7) ? $img_logo.addClass('opacity-6') : $img_logo.removeClass('opacity-8 opacity-7 opacity-6');
                ($(this).scrollTop() > offset8) ? $img_logo.addClass('opacity-7') : $img_logo.removeClass('opacity-8 opacity-7');
                ($(this).scrollTop() > offset9) ? $img_logo.addClass('opacity-8') : $img_logo.removeClass('opacity-8');
            });
        });
    };
    IndexComponent = __decorate([
        Component({
            selector: 'my-index',
            templateUrl: './index.component.html',
        }),
        __metadata("design:paramtypes", [EventiService,
            MdDialog,
            Title])
    ], IndexComponent);
    return IndexComponent;
}());
export { IndexComponent };
var DialogAlert = /** @class */ (function () {
    function DialogAlert(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogAlert = __decorate([
        Component({
            selector: 'dialog-alert',
            template: "\n\t\t<div class=\"center-align\">\n\t\t\t<h4>Benvenuti al sito ufficiale di Magie d'Inverno</h4>\n\t\t\t<div>\n\t\t\t\tSi avvisano i gentili visitatori che questo sito \u00E8 attualmente in fase di sviluppo, quindi alcune opzioni sono ancora da implementare, ma sono presenti le cose pi\u00F9 essenziali\n\t\t\t\tcome orari e mappa per raggiungerci.<br><br>\n\t\t\t\tUn cordiale ringraziamento, <br>\n\t\t\t\tMichele.\n        \t\t<br><br>\n\t\t\t<div>\n\t\t</div>\n    <div class=\"center-align dialog-actions\">\n      <button md-button (click)=\"dialogRef.close()\">Capito</button>\n    </div>\n\t"
        }),
        __metadata("design:paramtypes", [MdDialogRef])
    ], DialogAlert);
    return DialogAlert;
}());
export { DialogAlert };
