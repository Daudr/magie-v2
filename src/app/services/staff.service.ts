import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Staff } from '../staff';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StaffService {
	private staffUrl = '/api/staff';
	private corsiUrl = '/api/staffcorsi';
	
	constructor(private http: Http) { }

	getStaff(): Promise<Staff[]>{
		return this.http.get(this.corsiUrl)
			.toPromise()
			.then(response => response.json() as Staff[])
			.catch(this.handleError);
	}

	getCorsiStaff(): Promise<Staff[]> {
		return this.http.get(this.corsiUrl)
			.toPromise()
			.then(response => response.json() as Staff[])
			.catch(this.handleError);
	}

	private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}