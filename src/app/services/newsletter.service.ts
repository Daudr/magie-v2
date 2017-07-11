import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Receiver } from '../receiver';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsletterService {
  public receivers: Receiver[];

  constructor(private http: Http) { }

  addReceiver(receiver: Receiver): Promise<void | Receiver> {
    return this.http.post("/api/news", receiver)
      .toPromise()
      .then(res => res.json() as Receiver)
      .catch(this.handleError);
  }

  getReceivers (): Promise<void | Receiver[]> {
    return this.http.get("/api/news")
      .toPromise()
      .then(res => res.json() as Receiver[])
      .catch(this.handleError);
  }

  sendMails (subject: string, content: string) {
    this.getReceivers()
      .then((receivers: Receiver[]) => {
        this.receivers = receivers.map((receivers) => {
          return receivers;
      });

      for (let i = 0; i < this.receivers.length; i++) {
        if(this.receivers[i].email) {
          let email = {
            fromEmail: "michele@daudr.me",
            toEmail: this.receivers[i].email,
            subject: subject,
            content: content
          };
          this.sendMail(email);
        }
      }
    });
  }

  sendMail (email) {
    return this.http.post("/api/email", email)
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
