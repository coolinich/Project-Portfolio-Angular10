import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotMessageBody, PostBotResponse } from 'src/app/interfaces/bot';
import { Observable } from 'rxjs';
import { BOT_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactBotService {
  constructor(
    private http: HttpClient
  ) { }
  
  sendMessageToBot(messageBody: BotMessageBody): Observable<PostBotResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'json'
      })
    };
    return this.http.post<PostBotResponse>(BOT_URL + 'sendMessage', JSON.stringify(messageBody), httpOptions);
  }
}
