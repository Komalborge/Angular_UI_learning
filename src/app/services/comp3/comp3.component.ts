import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
    name:'giri',
    id:'103',
    password:'0904',
    Salary:'40,000'

  }
  this._utilityService.userName.next(JSON.stringify(emp));
  
}
}