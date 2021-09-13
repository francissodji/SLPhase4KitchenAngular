import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foods } from 'src/app/models/Foods';

@Component({
  selector: 'app-addnewfood',
  templateUrl: './addnewfood.component.html',
  styleUrls: ['./addnewfood.component.css']
})
export class AddnewfoodComponent implements OnInit {

  newFood: Foods = new Foods();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }


  addNewFood()
  {
    this._httpClient.post('http://localhost:8070/api/foods/newfood', this.newFood).subscribe(
      result =>{alert("Food successfully added."); this._router.navigate(['/listallfoods'])},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
