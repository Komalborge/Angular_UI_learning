import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/Product';


@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck {
  @Input() userid: number;
  @Input() parentData: string;
  @Input() product: Product;
pi;
  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor called");
   }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("HooksComponent ngOnChanges called");
    //console.log(this.parentData);
    for (const propname in changes) {
      const prop = changes[propname];

      const {previousValue, currentValue, firstChange} = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Prev  value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("---------------")

    }
    
  }

   // hooks 
  ngOnInit() {
    console.log("HooksComponent ngOnInit called")
    // api 
  }

}