import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

constructor(private http:HttpClient) { }

sendEmail(mailBody:any){
  let headers = new HttpHeaders();
  headers = headers.set('Accept','application/json');

  if(mailBody){
    headers = headers.set('Content-Type','application/json');
  }

  return this.http.post('http://localhost:5200/api/mail/sendmail',mailBody,{headers});
}
}
