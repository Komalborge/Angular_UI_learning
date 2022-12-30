import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childcmp',
  templateUrl: './childcmp.component.html',
  styleUrls: ['./childcmp.component.css']
})
export class ChildcmpComponent implements OnInit {
  @Output() studentregistration:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

addstudentinfo(value){
  this.studentregistration.emit(value);
  
}
}