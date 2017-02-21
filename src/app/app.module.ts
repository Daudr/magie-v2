import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './modules/app-routing.module';

import { CookieService } from 'angular2-cookie/services/cookies.service';


import { AppComponent, NewsDialog, BugDialog } from './app.component';
import { OrariComponent, DialogPomeriggio, DialogMattina } from './components/orari.component';
import { IndexComponent, DialogAlert } from './components/index.component';
import { EventiComponent, EventDialog } from './components/eventi.component';
import { ServiziComponent } from './components/servizi.component';
import { ContattiComponent } from './components/contatti.component';
import { GalleriaComponent } from './components/galleria.component';
import { AdminComponent} from './components/admin.component';
import { AggiungiEventoComponent } from './components/aggiungi-evento.component';
import { CreditsComponent } from './components/credits.component';
import { AdminEventiComponent } from './components/admin-eventi.component';
import { AdminStaffComponent } from './components/admin-staff.component';

@NgModule({
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      MaterialModule.forRoot()
    ],
  declarations: [
    AppComponent,
    IndexComponent,
    OrariComponent,
    EventiComponent,
    ServiziComponent,
    ContattiComponent,
    GalleriaComponent,
    AdminComponent,
    AggiungiEventoComponent,
    NewsDialog,
    DialogPomeriggio,
    DialogMattina,
    EventDialog,
    BugDialog,
    DialogAlert,
    CreditsComponent,
    AdminEventiComponent,
    AdminStaffComponent
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
    CookieService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
