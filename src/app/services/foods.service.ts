import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {


  constructor(private _httpClient: HttpClient) { }

  //list of all food
  public getAllFoods()
  {
    /*
    let allFoodURL = 'http://localhost:8070/api/foods/allfoods';
    this._httpClient.get(allFoodURL).subscribe(
      result =>{this.allFoods = result; console.log(this.allFoods);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
    */
  }

  //searche food
  /*
  public searchFood(searchName)
  {
    let URL = 'http://localhost:8070/api/foods/allsearchfoods/${searchName}';
    return this._httpClient.get<any[]>(URL).pipe(
       retry(1),
       catchError(this.handleError)
      //result =>{this.allFoods = result; console.log(this.allFoods);},
      //error =>{console.log("There are some error ..."); console.log(error);}
    );
  }

  public handleError(){

  }
  */
}
