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
var NewsletterService = /** @class */ (function () {
    function NewsletterService(http) {
        this.http = http;
    }
    NewsletterService.prototype.addReceiver = function (receiver) {
        return this.http.post("/api/news", receiver)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsletterService.prototype.getReceivers = function () {
        return this.http.get("/api/news")
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsletterService.prototype.sendMails = function (subject, content) {
        var _this = this;
        this.getReceivers()
            .then(function (receivers) {
            _this.receivers = receivers.map(function (receivers) {
                return receivers;
            });
            for (var i = 0; i < _this.receivers.length; i++) {
                if (_this.receivers[i].email) {
                    var email = {
                        fromEmail: "michele@daudr.me",
                        toEmail: _this.receivers[i].email,
                        subject: subject,
                        content: content
                    };
                    _this.sendMail(email);
                }
            }
        });
    };
    NewsletterService.prototype.sendMail = function (email) {
        return this.http.post("/api/email", email)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsletterService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    NewsletterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], NewsletterService);
    return NewsletterService;
}());
export { NewsletterService };
