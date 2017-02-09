import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventiService {
	
	constructor(private http: Http) { }

	getEventi(){
		return this.http.get('/api/eventi')
			.map(res => res.json());
	}

	getEventiProssimi(){
		return this.http.get('/api/eventi/soon')
			.map(res => res.json());
	}
}