import { Component, OnInit } from '@angular/core';
import { home } from '../models/homemodel';

@Component({
  selector: 'app-multipledata',
  templateUrl: './multipledata.component.html',
  styleUrls: ['./multipledata.component.css']
})
export class MultipledataComponent implements OnInit {
  home=new home();
  dataarray=[];
  constructor() { }

  ngOnInit() {
    this.home=new home()
    this.dataarray.push(this.home);
  }
  addform(){
    this.home=new home()
    this.dataarray.push(this.home);
  }
  onsubmit(){
    console.log(this.dataarray);
    
  }
  removeform(index){
   this.dataarray.splice(index);
  }
}
