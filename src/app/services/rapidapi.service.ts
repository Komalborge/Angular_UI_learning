import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
   
  url='https://bb-finance.p.rapidapi.com/market/auto-complete?query=mango';
  
  constructor(private httpclient:HttpClient) { }
     
  getDataBBFinance(){
    let headers=new HttpHeaders({
      'X-RapidAPI-Host':'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'ad1126d90cmsh100994aa8771daep160642jsn63c6770ca5b5',
        })
         return this.httpclient.get(this.url,{headers:headers})
         
  }
}
