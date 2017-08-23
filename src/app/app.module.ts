import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdSelectModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdTooltipModule,
} from '@angular/material';

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
import { EventComponent } from './components/event.component';
import { SitemapComponent } from './components/sitemap.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import 'hammerjs';

@NgModule({
  imports: [
      BrowserModule.withServerTransition({appId: 'magie-v2'}),
      AppRoutingModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      MdButtonModule,
      MdCardModule,
      MdCheckboxModule,
      MdCoreModule,
      MdDatepickerModule,
      MdDialogModule,
      MdIconModule,
      MdInputModule,
      MdMenuModule,
      MdNativeDateModule,
      MdSelectModule,
      MdSidenavModule,
      MdSnackBarModule,
      MdSortModule,
      MdTabsModule,
      MdTooltipModule,
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
    AdminLoginComponent,
    EventComponent,
    SitemapComponent
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
