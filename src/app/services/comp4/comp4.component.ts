import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) { 
  this._utilityService.userName.subscribe(res=>{
  this.userName=res;
  console.log(res);
  
  })
}
  ngOnInit() {
  }
updateUserName(uname){
  console.log(uname.value);
  let emp = {
    name:'aakriti',
    id:'104',
    password:'0907',
    Salary:'50,000'

  }
  this._utilityService.userName.next(JSON.stringify(emp));
  
}
}