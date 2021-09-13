import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  aUserName: any;
  aOldPassword: any;
  aNewPassword: any;
  userToConnect: Users = new Users();


  public connectedUserId: any;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }


  changePassword()
  {

    this._httpClient.put<any>('http://localhost:8070/api/user/updatepassword/',this.userToConnect).subscribe(
      result => {console.log("Correct registration");  console.log(this.connectedUserId); this._router.navigate(['/listmedecin'])},
      error =>{console.log("An exception has occured."); 
                  /*this.errorMessage = "Bad Credentials. Please enter valid username and password"*/
                  alert("Bad Credentials. Please enter valid username and password.");}
    )
  }
}
