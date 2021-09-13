import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchfoods',
  templateUrl: './searchfoods.component.html',
  styleUrls: ['./searchfoods.component.css']
})
export class SearchfoodsComponent implements OnInit {

  searchFood: any;
  searchVariable: any;



  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {


  }

  getSearchFoods()
  {
    this._httpClient.get('http://localhost:8070/api/foods/allsearchfoods'+this.searchVariable).subscribe(
      result =>{this.searchFood = result; console.log(this.searchFood);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
