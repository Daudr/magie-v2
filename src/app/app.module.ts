import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent, NewsDialog, BugDialog } from './app.component';
import { OrariComponent, DialogPomeriggio, DialogMattina } from './components/orari.component';
import { IndexComponent, DialogAlert } from './components/index.component';
import { EventiComponent, EventDialog } from './components/eventi.component';
import { ServiziComponent } from './components/servizi.component';
import { ContattiComponent } from './components/contatti.component';
import { AdminComponent} from './components/admin.component';
import { CreditsComponent } from './components/credits.component';
import { AdminEventiComponent } from './components/admin-eventi.component';
import { AdminNewsComponent } from './components/admin-news.component';
import { IceTeamComponent } from './components/ice-team.component';
import { HockeyComponent } from './components/hockey.component';
import { PattArtComponent } from './components/patt-art.component';
import { HockeyPistaComponent } from './components/hockey-pista.component';
import { PattInlineComponent } from './components/patt-inline.component';
import { PrivacyComponent } from './components/privacy.component';
import { AdminLoginComponent } from './components/admin-login.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import 'hammerjs';

@NgModule({
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      FormsModule,
      MaterialModule,
      BrowserAnimationsModule
    ],
  declarations: [
    AppComponent,
    IndexComponent,
    OrariComponent,
    EventiComponent,
    ServiziComponent,
    ContattiComponent,
    AdminComponent,
    NewsDialog,
    DialogPomeriggio,
    DialogMattina,
    EventDialog,
    BugDialog,
    DialogAlert,
    CreditsComponent,
    AdminEventiComponent,
    AdminNewsComponent,
    IceTeamComponent,
    HockeyComponent,
    HockeyPistaComponent,
    PattArtComponent,
    PattInlineComponent,
    PrivacyComponent,
    AdminLoginComponent
  ],
  entryComponents: [
    NewsDialog,
    DialogPomeriggio,
    DialogMattina,
    EventDialog,
    BugDialog,
    DialogAlert
  ],
  providers: [
    Title,
    AuthService,
    AuthGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
