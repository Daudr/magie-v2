import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Eventi } from '../eventi';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventiService {
	private eventiUrl = '/api/eventi';
	private soonUrl = '/api/eventisoon';
	private futureUrl ='/api/eventifuture';
	private pastUrl = '/api/eventipast';

	constructor(private http: Http) { }

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

	getFutureEvents(): Promise<Eventi[]> {
		return this.http.get(this.futureUrl)
			.toPromise()
			.then(response => response.json() as Eventi[])
			.catch(this.handleError);
	}

	getPastEvents(): Promise<Eventi[]> {
		return this.http.get(this.pastUrl)
			.toPromise()
			.then(response => response.json() as Eventi[])
			.catch(this.handleError);
	}

	creaEvento (nuovoEvento: Eventi): Promise<Eventi> {
		return this.http.post(this.eventiUrl, nuovoEvento)
			.toPromise()
			.then(response => response.json() as Eventi)
			.catch(this.handleError);
	}

	rimuoviEvento (delEvento: Eventi): Promise<String> {
		return this.http.delete(this.eventiUrl + '/' + delEvento._id)
			.toPromise()
			.then(response => response.json() as String)
			.catch(this.handleError);
	}

	agiornaEvento (putEvento: Eventi): Promise<Eventi> {
		var putUrl = this.eventiUrl + '/' + putEvento._id;

		return this.http.put(putUrl, putEvento)
			.toPromise()
			.then(response => response.json() as Eventi)
			.catch(this.handleError);
	}

	private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}