import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
  products;
  constructor(private_id:DemoserviceService ) { }

  ngOnInit() {
  }

}
