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
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(title, auth, router) {
        this.title = title;
        this.auth = auth;
        this.router = router;
        this.admin = true;
        this.trueAdmin = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Admin Magie D\'Inverno');
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
        if (!($('.mat-tab-list').hasClass('light-blue lighten-2 tab'))) {
            $('.mat-tab-list').addClass('light-blue lighten-2 tab');
        }
    };
    AdminComponent.prototype.logout = function () {
        this.auth.logout();
        location.href = location.href;
    };
    AdminComponent = __decorate([
        Component({
            selector: 'admin',
            templateUrl: './admin.component.html',
        }),
        __metadata("design:paramtypes", [Title,
            AuthService,
            Router])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
