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
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    AdminLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.Admin);
                _this.router.navigate(['/admin']);
            }
            else {
                _this.router.navigate(['admin/login']);
            }
        });
    };
    AdminLoginComponent = __decorate([
        Component({
            selector: 'admin-login',
            templateUrl: './admin-login.component.html'
        }),
        __metadata("design:paramtypes", [AuthService,
            Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
export { AdminLoginComponent };
