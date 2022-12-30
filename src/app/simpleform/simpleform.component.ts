import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  defaultGender:string='Male'
  defaultCourse:string='Anguler'
  employee=new Employee();
submitted:boolean=false;
genders=[
  {id:'1',value:'Male'},
  {id:'2',value:'Female'}
]
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    // for get exact value and connect to class also
    // var emp=new Employee; 
    // emp .course = form.value.course;
    // emp.username = form.value.userDetails.username;
    // emp .email = form.value.userDetails.email;

    this.submitted=true;
    this.employee .course = form.value.course;
    this.employee .username = form.value.userDetails.username;
    this.employee .email = form.value.userDetails.email;
    this.employee.gender=form.value.gender;
    this.saveEmployeeDta(this.employee);
    form.reset();
    form.controls['course'].setValue('Anguler');
    form.controls['gender'].setValue('Male')
    
    
  }
  saveEmployeeDta(emp:Employee){
    console.log(emp.course);
    
    
  }

}


