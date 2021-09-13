import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/models/Foods';

@Component({
  selector: 'app-deletefood',
  templateUrl: './deletefood.component.html',
  styleUrls: ['./deletefood.component.css']
})

export class DeletefoodComponent implements OnInit {

  theselectedIdFood: any;
  foodtodelete: Foods = new Foods();

  constructor(private _httpClient: HttpClient, private _activatedroute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this.theselectedIdFood = this._activatedroute.snapshot.paramMap.get("idfood");

    console.log(this.theselectedIdFood);

    this._httpClient.get<Foods>('http://localhost:8070/api/foods/onefood/'+ this.theselectedIdFood).subscribe(
      result =>{this.foodtodelete = result;  console.log},
      error =>{console.log("There are some error"); console.log(error) }
    )
  }

  deletefood()
  {
    this.theselectedIdFood = this._activatedroute.snapshot.paramMap.get("idfood");
    console.log(this.theselectedIdFood);

    this._httpClient.get('http://localhost:8070/api/foods/deletefood/'+ this.theselectedIdFood).subscribe(
      result =>{alert("Food successfully deleted."); this._router.navigate(['/listallfoods']);},
      error =>{console.log("There are some error"); console.log(error) }
    )
  }

}
