import { Component,EventEmitter, Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 //@Input() EmployeeRecords:string
 //@Output() foodevent:EventEmitter<string>=new EventEmitter<string>();
 @Output() studentregistration:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    //console.log('from parent', this.EmployeeRecords);
    
  }
//addtofood(value){

  //this.foodevent.emit(value);
  addstudentinfo(value){
    this.studentregistration.emit(value);
    
  }
}


