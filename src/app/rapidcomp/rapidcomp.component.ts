import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidcomp',
  templateUrl: './rapidcomp.component.html',
  styleUrls: ['./rapidcomp.component.css']
})
export class RapidcompComponent implements OnInit {
  arrposts:any[]=[];
  constructor(private _rapidapiservice:RapidapiService,private _fireBase:FirebaseService) { }

  ngOnInit() {
   this._rapidapiservice.getDataBBFinance().subscribe(res =>{
  console.log('rapid finance data',res);
  this.arrposts.push(res);
  console.log('api data',this.arrposts);
   })

  }
  createPost(){
    this._fireBase.createPost().subscribe(res =>{
    console.log('firebase post',res);
    
    })
}
   //showData(){
   // this._rapidapiservice.getDataBBFinance().subscribe(res=>{
       // console.log("Api data ",res);
          //})
        //}


}