import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(private http:HttpClient) { }

takePayment(productName:string,amount:number,token:any){
  let body = {
    tokenId :token.id,
    productName:productName,
    amount:amount
  };
  let bodyString = JSON.stringify(body);
  let headers = new HttpHeaders({"Content-Type":"application/json"});
  let options = {
    headers:headers
  }

  return this.http.post('http://localhost:5200/api/stripepayment',body,options);
}
}
