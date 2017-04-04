import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
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

import { AuthGuard } from '../guards/auth.guard';

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
		path: 'admin',
		component: AdminComponent,
		canActivate: [ AuthGuard ]
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
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
