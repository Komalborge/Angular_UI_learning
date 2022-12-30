import { Component, OnInit } from '@angular/core';
import { addressModel } from '../models/address';



@Component({
  selector: 'app-simple-validationform',
  templateUrl: './simple-validationform.component.html',
  styleUrls: ['./simple-validationform.component.css']
})
export class SimpleValidationformComponent implements OnInit {
  minDate:any="";
  countryData: any[] = ['India', 'US', 'UK'];

  model: addressModel = {
    address: '',
    email:'',
    city: '',
    state:'',
    postcode: null,
    country: null,
    aggrement: false
  };
  constructor() { }

  ngOnInit() {
    this.getDate();
  }

  getDate(){
    var date:any=new Date();
    var toDate:any=date.getDate();
    if (toDate <10) {
      toDate="0"+toDate;
    }
    var month:any=date.getMonth()+1;
    if (month<10) {
      month='0'+month;
      
    }
    var year:any=date.getFullYear();
    this.minDate=year+"-"+ month + "-" + toDate;
    console.log(this.minDate);
    
  }
  
    onFormSubmit() {
      console.log("Full Address", this.model);  
    }
  
  }



