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
import { NewsletterService } from '../services/newsletter.service';
var AdminNewsComponent = /** @class */ (function () {
    function AdminNewsComponent(news) {
        this.news = news;
        this.editorOpen = false;
    }
    AdminNewsComponent.prototype.ngAfterViewInit = function () { };
    AdminNewsComponent.prototype.openEditor = function () {
        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            /*[{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],*/
            ['clean']
        ];
        var options = {
            modules: {
                toolbar: toolbarOptions
            },
            placeholder: 'Inserisci il contenuto dell\'email',
            theme: 'snow'
        };
        this.editor = new Quill('#editor-quill', options);
        this.editorOpen = true;
    };
    AdminNewsComponent.prototype.sendMail = function () {
        this.news.sendMails(this.subject, this.editor.getText());
    };
    AdminNewsComponent = __decorate([
        Component({
            selector: 'admin-news',
            templateUrl: './admin-news.component.html',
            providers: [NewsletterService]
        }),
        __metadata("design:paramtypes", [NewsletterService])
    ], AdminNewsComponent);
    return AdminNewsComponent;
}());
export { AdminNewsComponent };
