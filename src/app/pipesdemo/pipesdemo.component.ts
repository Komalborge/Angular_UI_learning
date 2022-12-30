import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {
  price: number=800000;
  obser;
  obj={
    id:'101',
    name:'Sneha',
    Dep: 'Devloping',
  };
  
   obj2={ id:'102',
    name:'Shrisha',
    dep:'Developing'

};
  obj3={
    id:'103',
    name:'ankish',
    deo:'Developing'
  }
    

todaysDate=new Date();
  constructor(private _utilityService  : UtilityService) { 
  this.obser =_utilityService.userName;
}
  ngOnInit() {
  }

}
