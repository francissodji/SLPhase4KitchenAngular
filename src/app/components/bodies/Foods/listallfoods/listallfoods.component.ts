import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listallfoods',
  templateUrl: './listallfoods.component.html',
  styleUrls: ['./listallfoods.component.css']
})
export class ListallfoodsComponent implements OnInit {

  allFoods: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllFoods()
  }

  getAllFoods()
  {
    this._httpClient.get('http://localhost:8070/api/foods/allfoods').subscribe(
      result =>{this.allFoods = result; console.log(this.allFoods);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

  deleteFood()
  {
    
  }

  

}
