import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Receiver } from '../receiver';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsletterService {

  constructor(private http: Http) { }

  addReceiver(receiver: Receiver) {
    return this.http.post("/api/news", receiver)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }

}
