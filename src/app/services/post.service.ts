import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  devAPIUrl='https://jsonplaceholder.typicode.com/';

  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<any>{
    // let newAPI= devAPIUrl;
    //  return this.httpClient.get('${this.newAPI}posts');

     let posts='posts';
     return this.httpClient.get(this.devAPIUrl + posts)
  }
}