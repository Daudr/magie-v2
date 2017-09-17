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
var IceTeamComponent = /** @class */ (function () {
    function IceTeamComponent(title) {
        this.title = title;
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
        this.foto = [
            {
                path: '../assets/icons/iceteam/hockey/foto1.jpg'
            },
            {
                path: '../assets/icons/iceteam/hockey/foto2.jpg'
            },
            {
                path: '../assets/icons/iceteam/hockey/foto3.jpg'
            },
            {
                path: '../assets/icons/iceteam/hockey/foto4.jpg'
            }
        ];
    }
    IceTeamComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Ice Team Sanve');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    IceTeamComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    IceTeamComponent = __decorate([
        Component({
            selector: 'ice-team',
            templateUrl: './ice-team.component.html'
        }),
        __metadata("design:paramtypes", [Title])
    ], IceTeamComponent);
    return IceTeamComponent;
}());
export { IceTeamComponent };
