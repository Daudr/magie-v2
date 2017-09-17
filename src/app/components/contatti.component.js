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
import { Title } from '@angular/platform-browser';
var ContattiComponent = /** @class */ (function () {
    function ContattiComponent(title) {
        this.title = title;
        this.staff = [
            {
                icon: "assets/icons/staff/mirco.jpg",
                nome: "Mirco Zago",
                compiti: "Informazioni generali",
                disponibilita: "Lun-Ven: 15:00 - 19:00",
                telefono: "3314504424",
                email: "mircozago@magiedinverno.it"
            },
            {
                icon: "assets/icons/staff/michele.jpg",
                nome: "Michele Da Rin",
                compiti: "Sito web",
                disponibilita: "Lun-Ven: 18:00 - 19:00",
                telefono: "3938405607",
                email: "micheledarin@magiedinverno.it"
            },
            {
                icon: 'assets/icons/staff/renato.jpg',
                nome: "Renato Da Rin",
                compiti: "Prenotazione turni serali",
                disponibilita: "Lun-Ven: 15:00 - 19:00",
                telefono: "0123456789",
                email: "renatodarin@magiedinverno.it"
            },
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
            },
            {
                icon: "assets/icons/staff/caio.jpg",
                nome: "Caio Zanette",
                compiti: "Compleanni e gonfiabili/area bimbi",
                disponibilita: "Lun-Ven: 15:00 - 19:00",
                telefono: "0123456789",
                email: "claudiozanette@magiedinverno.it"
            }
        ];
    }
    ContattiComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Magie D\'Inverno - Contatti');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    ContattiComponent = __decorate([
        Component({
            selector: 'my-contatti',
            templateUrl: "./contatti.component.html",
        }),
        __metadata("design:paramtypes", [Title])
    ], ContattiComponent);
    return ContattiComponent;
}());
export { ContattiComponent };
