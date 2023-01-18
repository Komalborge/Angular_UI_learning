import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url='https://angular-crud-operation-86bf0-default-rtdb.firebaseio.com/'
  constructor( private _httpclient:HttpClient) { }

createPost(){
let postData={
  title:'this is angular 8 crud ',
  content:'thise is a firebase crud opration with post'

}
return  this._httpclient.post(this.url+ 'posts.json', postData);

}

//createPostDataReactiveForm(fireBasePost:FirebaseService){
 // return this._httpclient.post(this.url+'post.json',fireBasePost);
  
    
 

}


