import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genderpipes',
  templateUrl: './genderpipes.component.html',
  styleUrls: ['./genderpipes.component.css']
})
export class GenderpipesComponent implements OnInit {

  namesearch: string = '';

  productArr: any[] = [
    {
      id:1,
      name: 'Anuradha Aldar',
      gender: 'female',
      dept: 'IT',
      sal:"50000"
    },
    {
      id:2,
      name: 'Aradhya ',
      gender: 'female',
      dept: 'HR',
      sal:"60000"
    },
    {
      id:3,
      name: 'Rudra ',
      gender: 'male',
      dept: 'finance',
      sal:"65000"
    },
    {
      id:4,
      name: 'yuvraj',
      gender: 'male',
      dept: 'finance',
      sal:"75000"
    },
    {
      id:5,
      name: 'yuvraj',
      gender: 'male',
      dept: 'finance',
      sal:"75000"
    },
    {
      id:6,
      name: 'sagar',
      gender: 'male',
      dept: 'comp',
      sal:"85000"
    },
    {
      id:7,
      name: 'pooja',
      gender: 'female',
      dept: 'comp',
      sal:"55000"
    },

    {
      id:8,
      name: 'paras',
      gender: 'male',
      dept: 'IT',
      sal:"55000"
    },
    {
      id:9,
      name: 'Krushna',
      gender: 'male',
      dept: 'HR',
      sal:"57000"
    },
    {
      id:10,
      name: 'Ananya',
      gender: 'female',
      dept: 'HR',
      sal:"57000"
    },
    {
      id:11,
      name: 'Ananya',
      gender: 'other',
      dept: 'HR',
      sal:"57000"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}