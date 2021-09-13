import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Foods } from 'src/app/models/Foods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  //allFoods: Foods = new Foods();

  searchElement: any;
  allFoods: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllFoods();
  }

  //all foods available
  getAllFoods()
  {
    this._httpClient.get('http://localhost:8070/api/foods/allfoods').subscribe(
      result =>{this.allFoods = result; console.log(this.allFoods);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

  //all food from search
  searchFoods()
  {
    this._httpClient.get<Foods>('http://localhost:8070/api/foods/allsearchfoods/'+this.searchElement).subscribe(
      result =>{this.allFoods = result; console.log(this.allFoods);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }
}
