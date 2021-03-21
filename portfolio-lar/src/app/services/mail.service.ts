import { Injectable } from '@angular/core';
import { EmailBody, PostEmailResponse } from 'src/app/interfaces/email';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  serverURL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(emailData: EmailBody): Observable<PostEmailResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'responseType': 'json'
      }),
    };

    console.log(emailData);
    return this.http.post('/send', JSON.stringify(emailData), httpOptions);
  }
}
