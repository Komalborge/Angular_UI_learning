import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
 userForm:NgForm;
 url="https://angular-crud-operation-86bf0-default-rtdb.firebaseio.com/user.json"
users=[
];
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onAddUser(userData:User){
console.log(userData);
this.users.push(userData)
this.http.post<User>(this.url,userData).subscribe(
  (res)=>{
    console.log(res);
    
  }

  
)
  }

}
