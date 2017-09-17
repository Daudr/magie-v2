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
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EventiService } from '../services/eventi.service';
var EventComponent = /** @class */ (function () {
    function EventComponent(route, eventiService, title) {
        this.route = route;
        this.eventiService = eventiService;
        this.title = title;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        this.eventiService
            .getEvent(this._id)
            .then(function (event) {
            _this.event = event;
            _this.title.setTitle(event.nome);
        });
    };
    EventComponent.prototype.ngAfterViewInit = function () {
        $('.materialboxed').materialbox();
    };
    EventComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EventComponent = __decorate([
        Component({
            selector: 'my-event',
            templateUrl: './event.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute, EventiService, Title])
    ], EventComponent);
    return EventComponent;
}());
export { EventComponent };
