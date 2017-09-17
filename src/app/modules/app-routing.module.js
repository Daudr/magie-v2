var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from '../components/index.component';
import { OrariComponent } from '../components/orari.component';
import { EventiComponent } from '../components/eventi.component';
import { ServiziComponent } from '../components/servizi.component';
import { ContattiComponent } from '../components/contatti.component';
import { AdminComponent } from '../components/admin.component';
import { CreditsComponent } from '../components/credits.component';
import { IceTeamComponent } from '../components/ice-team.component';
import { PrivacyComponent } from '../components/privacy.component';
import { AdminLoginComponent } from '../components/admin-login.component';
import { EventComponent } from '../components/event.component';
import { SitemapComponent } from '../components/sitemap.component';
import { AuthGuard } from '../guards/auth.guard';
var routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'orari',
        component: OrariComponent
    },
    {
        path: 'eventi',
        component: EventiComponent
    },
    {
        path: 'eventi/:id',
        component: EventComponent
    },
    {
        path: 'servizi',
        component: ServiziComponent
    },
    {
        path: 'contatti',
        component: ContattiComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/login',
        component: AdminLoginComponent /* ,
        canActivate: [ AuthGuard ] */
    },
    {
        path: 'credits',
        component: CreditsComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'iceteam',
        component: IceTeamComponent
    },
    {
        path: 'sitemap',
        component: SitemapComponent
    },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', redirectTo: '/index', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
