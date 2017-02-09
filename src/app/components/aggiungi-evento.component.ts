import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'aggiungi-evento',
	template:`
		<div class="container">
			<div class="card-panel">
				<h1>Aggiungi Evento</h1>

				<form class="center-align">
					<md-input-container class="example-full-width">
					    <input md-input placeholder="Nome">
					</md-input-container>
					<br>
					<md-input-container>
				    	<input md-input placeholder="Cognome">
				    </md-input-container>
				</form>
			</div>
		</div>
	`
})
export class AggiungiEventoComponent { }