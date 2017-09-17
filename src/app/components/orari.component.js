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
import { MdSnackBar, MdDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
var OrariComponent = /** @class */ (function () {
    function OrariComponent(snackBar, dialog, title) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.title = title;
        this.changes = [
            {
                giorno: new Date('2017-02-19T00:00:00.000Z'),
                primoTurno: '9:45 - 11:45',
                secondoTurno: '13:45 - 15:45',
                terzoTurno: '17:10 - 19:30',
            }
        ];
    }
    OrariComponent.prototype.ngOnInit = function () {
        if (window.screen.width < 992) {
            this.openSnackBar();
        }
        this.title.setTitle('Magie D\'Inverno - Orari e Prezzi');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    OrariComponent.prototype.openDialogPomeriggio = function () {
        this.dialog.open(DialogPomeriggio, {
            height: '500px',
        });
    };
    OrariComponent.prototype.openDialogMattina = function () {
        this.dialog.open(DialogMattina, {
            height: '500px',
        });
    };
    OrariComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Si consiglia di ruotare il dispositivo", "Chiudi", {
            duration: 6000,
        });
    };
    OrariComponent.prototype.traduciData = function (grn) {
        return new DatePipe('it-IT').transform(grn, 'fullDate');
    };
    OrariComponent = __decorate([
        Component({
            selector: 'orari',
            providers: [MdSnackBar],
            templateUrl: './orari.component.html'
        }),
        __metadata("design:paramtypes", [MdSnackBar, MdDialog, Title])
    ], OrariComponent);
    return OrariComponent;
}());
export { OrariComponent };
var DialogPomeriggio = /** @class */ (function () {
    function DialogPomeriggio() {
        this.staff = [
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
    }
    DialogPomeriggio = __decorate([
        Component({
            selector: 'dialog-pomeriggio',
            template: "\n\t\t<img src=\"./assets/icons//banner/banner_about.jpg\" class=\"banner-corsi center-align\" />\n\t\t<h4>Corso di Hockey e Pattinaggio Artistico</h4>\n\t\t<div class=\"center-align\">\n\t\t\t<span>\n\t\t\t\tDa inserire:<br>\n\t\t\t\tinformazioni relative ai corsi (avviamento, artistico, hockey)\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"contatti row\">\n\t\t\t<h4 class=\"center-align\">Per informazioni:</h4>\n\t\t\t<div *ngFor=\"let person of staff\">\n\t\t\t\t<div class=\"col m6\">\n\t\t\t\t\t<div class=\"card light-blue lighten-1\">\n\t\t\t            <div class=\"card-content white-text\">\n\t\t\t              \t<div class=\"col l2 s3\">\n\t\t\t\t              <img src={{person.icon}} class=\"circle responsive-img\">\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<span class=\"card-title center-align\">{{person.nome}}</span>\n\t\t\t\t          \t<p class=\"right-align hide-on-small-only\">\n\t\t\t\t          \t\tContattare per: {{person.compiti}}<br>\n\t\t\t\t          \t\tContattare: {{person.disponibilita}}<br>\n\t\t\t\t          \t\tCel: {{person.telefono}}<br>\n\t\t\t\t          \t\tEmail: {{person.email}}<br>\n\t\t\t\t          \t</p>\n\t\t\t\t          \t<p class=\"hide-on-med-and-up p-dialog\">\n\t\t\t\t          \t\t<br>\n\t\t\t\t          \t\tContattare per:<br>\n\t\t\t\t          \t\t{{person.compiti}}<br><br>\n\t\t\t\t          \t\tContattare:<br>\n\t\t\t\t          \t\t{{person.disponibilita}}<br><br>\n\t\t\t\t          \t\tCellulare:<br>\n\t\t\t\t          \t\t{{person.telefono}}<br><br>\n\t\t\t\t          \t\tEmail:\n\t\t\t\t          \t</p>\n\t\t\t\t          \t<p class=\"p-email-dialog hide-on-med-and-up\">{{person.email}}<br></p>\n\t\t\t            </div>\n\t\t\t            <div class=\"card-action center-align\">\n\t\t\t              <a href=\"tel:{{person.telefono}}\" class=\"btn btn-flat light-blue darken-4 white-text waves-effect\">Chiama</a>\n\t\t\t              <a href=\"mailto:{{person.email}}\" class=\"btn btn-flat white-text light-blue darken-4 waves-effect margin-btn\" disabled>Invia email</a>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-panel center-align db-error\" *ngIf=\"!staff\">\n\t\t\t\t<h3 class=\"hide-on-small-only\">Caricamento dei contatti</h3>\n\t\t\t\t<h4 class=\"hide-on-med-and-up\">Caricamento dei contatti</h4>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], DialogPomeriggio);
    return DialogPomeriggio;
}());
export { DialogPomeriggio };
var DialogMattina = /** @class */ (function () {
    function DialogMattina() {
        this.staff = [
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
    }
    DialogMattina = __decorate([
        Component({
            selector: 'dialog-mattina',
            template: "\n\t\t<img src=\"./assets/icons//banner/banner_about.jpg\" class=\"banner-corsi center-align\" />\n\t\t<h4 class=\"center-align\">Corso di avviamento al pattinaggio su ghiaccio</h4>\n\t\t<div class=\"center-align\">\n\t\t\t<span>\n\t\t\t\tDa inserire:<br>\n\t\t\t\tinformazioni relative ai corsi (avviamento, artistico, hockey)\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"contatti row\">\n\t\t\t<h4 class=\"center-align\">Per informazioni:</h4>\n\t\t\t<div *ngFor=\"let person of staff\">\n\t\t\t\t<div class=\"col m6\">\n\t\t\t\t\t<div class=\"card light-blue lighten-1\">\n\t\t\t            <div class=\"card-content white-text\">\n\t\t\t              \t<div class=\"col l2 s3\">\n\t\t\t\t              <img src={{person.icon}} class=\"circle responsive-img\">\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<span class=\"card-title center-align\">{{person.nome}}</span>\n\t\t\t\t          \t<p class=\"right-align hide-on-small-only\">\n\t\t\t\t          \t\tContattare per: {{person.compiti}}<br>\n\t\t\t\t          \t\tContattare: {{person.disponibilita}}<br>\n\t\t\t\t          \t\tCel: {{person.telefono}}<br>\n\t\t\t\t          \t\tEmail: {{person.email}}<br>\n\t\t\t\t          \t</p>\n\t\t\t\t          \t<p class=\"hide-on-med-and-up p-dialog\">\n\t\t\t\t          \t\t<br>\n\t\t\t\t          \t\tContattare per:<br>\n\t\t\t\t          \t\t{{person.compiti}}<br><br>\n\t\t\t\t          \t\tContattare:<br>\n\t\t\t\t          \t\t{{person.disponibilita}}<br><br>\n\t\t\t\t          \t\tCellulare:<br>\n\t\t\t\t          \t\t{{person.telefono}}<br><br>\n\t\t\t\t          \t\tEmail:\n\t\t\t\t          \t</p>\n\t\t\t\t          \t<p class=\"p-email-dialog hide-on-med-and-up\">{{person.email}}<br></p>\n\t\t\t            </div>\n\t\t\t            <div class=\"card-action center-align\">\n\t\t\t              <a href=\"tel:{{person.telefono}}\" class=\"btn btn-flat light-blue darken-4 white-text waves-effect\">Chiama</a>\n\t\t\t              <a href=\"mailto:{{person.email}}\" class=\"btn btn-flat white-text light-blue darken-4 waves-effect margin-btn\">Invia email</a>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], DialogMattina);
    return DialogMattina;
}());
export { DialogMattina };
