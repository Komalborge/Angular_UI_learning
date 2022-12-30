import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  apiURl='https://jsonplaceholder.typicode.com/users';
  products=[
   {name:'Laptop',id:'101'},
   {name:'Mobile',id:'102'},
   {name:'tv',id:'103'}
    
]

  constructor(private http: HttpClient) { }
}
