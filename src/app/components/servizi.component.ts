import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-servizi',
	templateUrl: `./servizi.component.html`,
})
export class ServiziComponent  {
	ngOnInit() {
		if(!($('body').hasClass('back_img'))){
			$('body').addClass('back_img');
		}
	}
}
