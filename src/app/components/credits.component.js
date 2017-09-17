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
var CreditsComponent = /** @class */ (function () {
    function CreditsComponent(title) {
        this.title = title;
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
    CreditsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Magie D\'Inverno - Crediti');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    CreditsComponent = __decorate([
        Component({
            selector: 'credits',
            templateUrl: './credits.component.html'
        }),
        __metadata("design:paramtypes", [Title])
    ], CreditsComponent);
    return CreditsComponent;
}());
export { CreditsComponent };
