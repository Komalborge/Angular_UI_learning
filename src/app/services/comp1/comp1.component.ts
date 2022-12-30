import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName;
  
constructor(private _utilityService: UtilityService) { 
  this._utilityService.userName.subscribe(res=>{
  this.userName=res;
  console.table(res);
  
  })
}
  ngOnInit() {
  }
updateUserName(uname){
  console.table(uname.value);
  let emp = {
    name:'Komal',
    id:'100',
    password:'0909',
    Salary:'70,000'
  }
  
  this._utilityService.userName.next(JSON.stringify(emp));
  
}
}
