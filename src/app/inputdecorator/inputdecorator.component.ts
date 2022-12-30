import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdecorator',
  templateUrl: './inputdecorator.component.html',
  styleUrls: ['./inputdecorator.component.css']
})
export class InputdecoratorComponent implements OnInit {
 
 movies: any[] = [{ title: 'Brahmastra', director: 'Ayan Mukerji', cast: 'Ranbir kapoor', releaseDate: '2022' },
  { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
  { title: 'KGF 2', director: 'RockBhai', cast:'Yash', releaseDate: '2022'}]
  constructor() { }

  ngOnInit() {
  }

}
