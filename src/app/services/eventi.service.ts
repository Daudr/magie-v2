import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Eventi } from '../eventi';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventiService {
	private eventiUrl = '/api/eventi';
	private soonUrl = '/api/eventi/soon'

	constructor(private http: Http) { }

	// get("/api/contacts")
    // getContacts(): Promise<Contact[]> {
    //     return this.http.get(this.contactsUrl)
    //         .toPromise()
    //         .then(response => response.json() as Contact[])
    //         .catch(this.handleError);
    // }

	getEventi(): Promise<Eventi[]>{
		return this.http.get(this.eventiUrl)
			.toPromise()
			.then(response => response.json() as Eventi[])
			.catch(this.handleError);
	}

	getEventiProssimi(): Promise<Eventi[]>{
		return this.http.get(this.soonUrl)
			.toPromise()
			.then(response => response.json() as Eventi[])
			.catch(this.handleError);
	}

	private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}