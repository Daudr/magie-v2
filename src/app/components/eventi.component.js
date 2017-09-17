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
import { MdDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EventiService } from '../services/eventi.service';
import { Eventi } from '../eventi';
var EventiComponent = /** @class */ (function () {
    function EventiComponent(eventiService, dialog, title) {
        this.eventiService = eventiService;
        this.dialog = dialog;
        this.title = title;
    }
    EventiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventiService
            .getFutureEvents()
            .then(function (futureEvents) {
            _this.futureEvents = futureEvents.map(function (futureEvents) {
                return futureEvents;
            });
        });
        this.eventiService
            .getPastEvents()
            .then(function (pastEvents) {
            _this.pastEvents = pastEvents.map(function (pastEvents) {
                return pastEvents;
            });
        });
        this.eventiService
            .getEventiProssimi()
            .then(function (soonEvents) {
            _this.soonEvents = soonEvents.map(function (soonEvents) {
                return soonEvents;
            });
            if (_this.soonEvents.length == 0) {
                _this.tab.selectedIndex = 1;
            }
        });
        this.title.setTitle('Magie D\'Inverno - Eventi');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    EventiComponent.prototype.ngAfterViewInit = function () {
        if (!($('.mat-tab-list').hasClass('back-col tab'))) {
            $('.mat-tab-list').addClass('back-col tab');
        }
    };
    EventiComponent.prototype.bindTab = function (tab) {
        this.tab = tab;
    };
    EventiComponent.prototype.openEventDialog = function (event) {
        this.dialog.closeAll();
        this.dialogRef = this.dialog.open(EventDialog);
        this.dialogRef.componentInstance.event = event;
    };
    EventiComponent = __decorate([
        Component({
            selector: 'my-eventi',
            templateUrl: './eventi.component.html',
        }),
        __metadata("design:paramtypes", [EventiService, MdDialog, Title])
    ], EventiComponent);
    return EventiComponent;
}());
export { EventiComponent };
var EventDialog = /** @class */ (function () {
    function EventDialog(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    EventDialog.prototype.ngOnInit = function () { };
    EventDialog.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    EventDialog.prototype.eventNavigate = function (id) {
        this.dialog.closeAll();
        this.router.navigate(['/eventi', id]);
    };
    EventDialog = __decorate([
        Component({
            providers: [Eventi],
            selector: 'event-dialog',
            template: "\n\t\t<div class=\"info dialog-event\">\n\t\t\t<img class=\"dialog-evento materialboxed responsive-img\" src={{event.foto}}>\n\t\t\t<div>\n\t\t\t\t<h3>{{event.nome}}</h3>\n\t\t\t\t<p><strong>Quando: </strong>{{event.data | date:'dd/MM/yyyy'}}</p>\n\t\t\t\t<p><strong>A che ora: </strong>Dalle {{event.oraInizio}}<p>\n\t\t\t\t<p><strong>Dove: </strong>Presso {{event.luogo}}</p>\n\t\t\t\t<div class=\"map-event\">\n\t\t\t\t\t<iframe\n\t\t\t\t\t\tframeborder=\"0\"\n\t\t\t\t\t\tclass=\"map-frame-event\"\n\t\t\t\t\t\tsrc=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLSt0CtQUeUcRvAz1SS5vNfk&key=AIzaSyBZbraKHNSZ6hXdK3ZPXCe3WHPcP4tdEM8\"\n\t\t\t\t\t\tallowfullscreen>\n\t\t\t\t\t</iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"descrizione\">\n\t\t\t<h3>Descrizione evento</h3>\n\t\t\t<p class=\"truncate\">{{event.descrizione}}</p>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"event.galleria\">\n\t\t\t<h3>Galleria evento</h3>\n\t\t\t<div *ngFor=\"let foto of event.galleria; let i=index\">\n\t\t\t\t<img src={{foto}} class=\"col l4 m6 s12 materialboxed iceteam\" *ngIf=\"i<3\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"center-align\">\n\t\t\t<a (click)=\"eventNavigate(event._id)\" class=\"btn\">Maggiori informazioni</a>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [MdDialog, Router])
    ], EventDialog);
    return EventDialog;
}());
export { EventDialog };
