var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { MdSnackBar } from '@angular/material';
import { Eventi } from '../eventi';
import { EventiService } from '../services/eventi.service';
var AdminEventiComponent = /** @class */ (function () {
    function AdminEventiComponent(eventiService, title, snackBar) {
        this.eventiService = eventiService;
        this.title = title;
        this.snackBar = snackBar;
    }
    AdminEventiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventiService
            .getEventi()
            .then(function (events) {
            _this.events = events.map(function (events) {
                return events;
            });
        });
    };
    AdminEventiComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    };
    AdminEventiComponent.prototype.refresh = function () {
        var _this = this;
        this.events = null;
        this.eventiService
            .getEventi()
            .then(function (events) {
            _this.events = events.map(function (events) {
                return events;
            });
        });
    };
    AdminEventiComponent.prototype.creaEvento = function () {
        if (this.nome || this.data || this.oraInizio) {
            var event_1 = {
                nome: this.nome,
                data: new Date(this.data),
                oraInizio: this.oraInizio,
                oraFine: this.oraFine,
                luogo: 'Pista di pattinaggio - Magie D\'Inverno',
                descrizione: this.descrizione,
                fotoMin: this.fotoMin,
                foto: this.fotoFull
            };
            console.log(event_1);
            if (confirm('Vuoi inserire l\'evento ' + event_1.nome + '?')) {
                this.inserisciEvento(event_1);
            }
        }
        else {
            console.log('Informazioni mancanti nel form');
        }
    };
    AdminEventiComponent.prototype.inserisciEvento = function (evento) {
        var _this = this;
        this.eventiService.creaEvento(evento)
            .then(function () {
            _this.snackBar.open("Evento aggiunto", "Chiudi", {
                duration: 6000,
            });
            _this.refresh();
        });
    };
    AdminEventiComponent.prototype.eliminaEvento = function (evento) {
        var _this = this;
        if (confirm('Vuoi rimuovere l\'evento ' + evento.nome + '?')) {
            this.eventiService.rimuoviEvento(evento._id)
                .then(function (deletedEvent) {
                var index = _this.events.indexOf(deletedEvent);
                if (index !== -1) {
                    _this.events.splice(index, 1);
                }
                _this.snackBar.open("Evento eliminato", "Chiudi", {
                    duration: 6000,
                });
                _this.refresh();
            });
        }
    };
    AdminEventiComponent.prototype.aggiornaEvento = function (id) {
        var _this = this;
        var evento = {
            _id: id,
            nome: this.m_nome,
            data: this.m_data,
            oraInizio: this.m_oraInizio,
            oraFine: this.m_oraFine,
            descrizione: this.m_descrizione,
            fotoMin: this.fotoMin,
            foto: this.fotoFull
        };
        if (confirm('Vuoi aggiornare l\'evento ' + evento.nome + '?')) {
            this.eventiService.aggiornaEvento(evento)
                .then(function (updateEvent) {
                _this.snackBar.open("Evento aggiornato", "Chiudi", {
                    duration: 6000,
                });
                _this.refresh();
            });
        }
    };
    AdminEventiComponent.prototype.goTo = function (location) {
        window.location.hash = location;
    };
    AdminEventiComponent.prototype.traduciData = function (dataEvento) {
        return new DatePipe('it-IT').transform(dataEvento, 'fullDate');
    };
    __decorate([
        Input(),
        __metadata("design:type", Eventi)
    ], AdminEventiComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AdminEventiComponent.prototype, "createHandler", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AdminEventiComponent.prototype, "updateHandler", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AdminEventiComponent.prototype, "deleteHandler", void 0);
    AdminEventiComponent = __decorate([
        Component({
            selector: 'admin-eventi',
            templateUrl: './admin-eventi.component.html'
        }),
        __metadata("design:paramtypes", [EventiService, Title, MdSnackBar])
    ], AdminEventiComponent);
    return AdminEventiComponent;
}());
export { AdminEventiComponent };
