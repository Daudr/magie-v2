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
var ServiziComponent = /** @class */ (function () {
    function ServiziComponent(title) {
        this.title = title;
        this.servizi = [
            {
                nome: 'Pista di Pattinaggio',
                foto: '../../assets/icons/services/pista1.jpg',
                descrizione: 'A Magie D\'Inverno è presente la più grande pista di pattinaggio del trevigiano: 800mq di ghiaccio vero.',
                id: 'pista'
            },
            {
                nome: 'Casette enogastronomiche',
                foto: '../../assets/icons/services/casette.jpg',
                descrizione: 'A Magie D\'Inverno sono presenti numerose casette ceh sapranno accontentarvi in tutto.',
                id: 'casette'
            },
            {
                nome: 'Noleggio Pattini',
                foto: '../../assets/icons/services/pattini.jpg',
                descrizione: 'A Magie D\'Inverno sono presenti pattini che vanno dal 23 al 49, per tutti.',
                id: 'pattini'
            },
            {
                nome: 'Taverna on Ice',
                foto: '../../assets/icons/services/taverna.jpg',
                descrizione: 'Magie d\'Inverno offre una taverna affittabile a tutti i visitatori, per informazioni rivolgersi a Mirco Zago.',
                id: 'taverna'
            },
            {
                nome: 'Gonfiabili e area bimbi',
                foto: '../../assets/icons/services/gonfiabili.jpg',
                descrizione: 'A Magie D\'Inverno è presente un capannone riscaldato con al suo interno dei gonfiabili, un area bimbi e un bar, dove grandi e piccini potranno stare insieme e giocare.',
                id: 'gonfiabili'
            },
            {
                nome: 'Corsi di avviamento',
                foto: '../../assets/icons/services/corsimattina.jpg',
                descrizione: 'Magie D\'Inverno offre ai più piccoli la possibilità di imparare a pattinare la domenica mattina',
                id: 'corsi'
            },
            {
                nome: 'Ice Team Sanve',
                foto: '../../assets/icons/background/back-img.jpg',
                descrizione: 'Magie d\'Inverno offre ai ragazzi la possibilità di imparare uno sport, poco conosciuto ma non per questo bello, a prezzi completamente convenienti.',
                id: 'iceteam'
            },
        ];
    }
    ServiziComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Magie D\'Inverno - Servizi');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    ServiziComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    };
    ServiziComponent = __decorate([
        Component({
            selector: 'my-servizi',
            templateUrl: "./servizi.component.html",
        }),
        __metadata("design:paramtypes", [Title])
    ], ServiziComponent);
    return ServiziComponent;
}());
export { ServiziComponent };
