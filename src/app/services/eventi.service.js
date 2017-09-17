var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var EventiService = /** @class */ (function () {
    function EventiService(http) {
        this.http = http;
        this.eventiUrl = '/api/eventi';
        this.soonUrl = '/api/eventisoon';
        this.futureUrl = '/api/eventifuture';
        this.pastUrl = '/api/eventipast';
    }
    EventiService.prototype.getEventi = function () {
        return this.http.get(this.eventiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.getEvent = function (id) {
        return this.http.get(this.eventiUrl + '/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.getEventiProssimi = function () {
        return this.http.get(this.soonUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.getFutureEvents = function () {
        return this.http.get(this.futureUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.getPastEvents = function () {
        return this.http.get(this.pastUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.creaEvento = function (nuovoEvento) {
        return this.http.post(this.eventiUrl, nuovoEvento)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.rimuoviEvento = function (delEventoID) {
        return this.http.delete(this.eventiUrl + '/' + delEventoID)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.aggiornaEvento = function (putEvento) {
        var putUrl = this.eventiUrl + '/' + putEvento._id;
        return this.http.put(putUrl, putEvento)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventiService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    EventiService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], EventiService);
    return EventiService;
}());
export { EventiService };
