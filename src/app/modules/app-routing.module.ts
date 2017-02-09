import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { IndexComponent } from '../components/index.component';
import { OrariComponent } from '../components/orari.component';
import { EventiComponent } from '../components/eventi.component';
import { ServiziComponent } from '../components/servizi.component';
import { ContattiComponent } from '../components/contatti.component';
import { GalleriaComponent } from '../components/galleria.component';
import { AdminComponent } from '../components/admin.component';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
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
		path: 'servizi',
		component: ServiziComponent
	},
	{
		path: 'contatti',
		component: ContattiComponent
	},
	{
		path: 'galleria',
		component: GalleriaComponent
	},
	{
		path: 'admin',
		component: AdminComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }