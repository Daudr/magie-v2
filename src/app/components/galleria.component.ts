import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-galleria',
	templateUrl: 'galleria.component.html'
})
export class GalleriaComponent {

	ngOnInit() {
		if(!($('body').hasClass('back_img'))){
			$('body').addClass('back_img');
		}
	}
}