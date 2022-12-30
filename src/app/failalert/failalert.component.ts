import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failalert',
  templateUrl: './failalert.component.html',
  styleUrls: ['./failalert.component.css']
})
export class FailalertComponent implements OnInit {
fail:string="This is warning! You are in danger... "
  constructor() { }

  ngOnInit() {
  }

}
