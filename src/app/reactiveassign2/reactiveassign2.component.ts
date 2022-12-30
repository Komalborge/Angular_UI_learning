import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactiveassign2',
  templateUrl: './reactiveassign2.component.html',
  styleUrls: ['./reactiveassign2.component.css']
})
export class Reactiveassign2Component implements OnInit {

  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        
          'pname': 'Codemind1122',
          'email': 'test@gmail.com',
          'pstatus':'Stable'
        }
          )}, 3500);
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'pname': new FormControl('', [Validators.required,this.naNames.bind(this)]),
      'email': new FormControl('', [Validators.required],this.NaEmails),
      'pstatus': new FormControl('', [Validators.required,Validators.maxLength(10),Validators.maxLength(10)]),
    })
  }
  notAllowedNames=['codemind','technology','test'];
  naNames(control:FormControl){
    if (this.notAllowedNames.indexOf(control.value)!==-1) {
    
      return{'notAllowedNames':true};
    }
    {
      return null;
    }
      }
      NaEmails(control:FormControl): Promise<any> | Observable<any> {
        const myResponse = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if(control.value === 'snlmilke7@gmail.com'){
              resolve({'emailNotAllowed': true})
            } else {
              resolve(null)
            }
          }, 3000);
        })
        return myResponse;
      }
    
  
  onSubmit() {
    console.log(this.myReactiveForm);
    
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm.value.pname);
    console.log(this.myReactiveForm.value.email);
    console.log(this.myReactiveForm.value.pstatus);
    this.myReactiveForm.reset();
  }
}