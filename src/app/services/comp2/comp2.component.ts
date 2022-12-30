import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
  console.log(uname.value);
  let emp = {
    name:'Sakshi',
    id:'101',
    password:'0908',
    Salary:'60,000'

  }
  this._utilityService.userName.next(JSON.stringify(emp));
  
}
}