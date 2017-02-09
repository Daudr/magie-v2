import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {
	
	constructor(private http: Http) { }

	getStaff(){
		return this.http.get('/api/staff')
			.map(res => res.json());
	}

	getCorsiStaff() {
		return this.http.get('/api/staff/corsi')
			.map(res => res.json());
	}
}