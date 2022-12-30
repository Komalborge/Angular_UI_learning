import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passalert',
  templateUrl: './passalert.component.html',
  styleUrls: ['./passalert.component.css']
})
export class PassalertComponent implements OnInit {
pass:string="You are so successfull!"
  constructor() { }

  ngOnInit() {
  }

}
