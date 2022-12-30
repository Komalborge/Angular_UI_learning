import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
  selectedProduct: string;
  constructor() { }
  title:string="Directive Assignment:"
  heading:string="*ngIf Example:-"
  isshow: String="false"
  subject:string="*ngFor Example:-"
  colleges:any[]=[{ Name: 'AP.Shah', Rating: '****4.5', Course: 'IT', Fees: '1,40,000' },
  { Name: 'DY.patil', Rating: '****4.2', Course: 'CS', Fees: '1,50,000' },
  { Name: 'RIT', Rating: '****0.5', Course: 'BE', Fees: '1,70,000' },
  { Name: 'sk.Somaiya', Rating: '****0.5', Course: 'B.tech', Fees: '1,80,000' },]

  
  ngOnInit() {
    
  }
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }
}

