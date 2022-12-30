import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //input decorator
 // title="Angular Learning"
 // movies: any[] = [{ title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
 // { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
 // { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}]
 //onchange:
 //data;name: string;
 //price: number;
 //product: Product =new Product();
 name:string="komal Borge"
 userid:string="ABCDEFGH"
 title:string="@Output Decorator Assignment"
 data:any;


 

 EmployeeRecords:any=[
  {
    eName:'Aashish',eSalary:'50,000',eId:'01'
  },
  {
    eName:'Sakshi',eSalary:'40,000',eId:'02'
  },
  {
    eName:'Sahil',eSalary:'80,000',eId:'04'
  },
  {
    eName:'kashish',eSalary:'70,000',eId:'05'
  },
  {
    eName:'Sai',eSalary:'60,000',eId:'06'
  }]
  student:any[]=[
    {
      StudentName:"Sonal Pawar",RollNo:"01",Percentage:"80",Grade:"B+"
    },
    {
      StudentName:"Shrushti Jadhav",RollNo:"02",Percentage:"75",Grade:"B+"
    },
    {
      StudentName:"Madhavi Patil",RollNo:"03",Percentage:"70",Grade:"B+"
    },
  {
    StudentName:"Aashish Yesale",RollNo:"04",Percentage:"80",Grade:"B+"
  },
  {
    StudentName:"Vinay Yadav",RollNo:"05",Percentage:"90",Grade:"A+"
  }
  ];




  getDataFromChild(value){
    console.log(value);
    this.student.push(value);
  }
  

}
 
