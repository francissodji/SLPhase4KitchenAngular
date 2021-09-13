import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  aUserName: any;
  aPassword: any;
  userToConnect: Users = new Users();
  connectedUser: Users = new Users();

  public connectedUserId: any;

  errorMessage: any;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }


  userLogin()
  {

    this._httpClient.post<any>('http://localhost:8070/api/user/login',this.userToConnect).subscribe(
      result => {console.log("Correct registration"); this.userToConnect = result; 
                  this.connectedUserId = result.iduser; console.log(this.connectedUserId); this._router.navigate(['/adminmenu'])},
      error =>{console.log("An exception has occured."); 
                  /*this.errorMessage = "Bad Credentials. Please enter valid username and password"*/
                  alert("Bad Credentials. Please enter valid username and password.");}
    )
  }

}
