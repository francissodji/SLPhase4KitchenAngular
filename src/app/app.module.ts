import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { KitchenRoute } from './app-routing.module';

import { MainmenuComponent } from './components/menus/mainmenu/mainmenu.component';
import { HomeComponent } from './components/menus/home/home.component';
import { PageNotFoundComponent } from './components/menus/page-not-found/page-not-found.component';
import { ListallfoodsComponent } from './components/bodies/Foods/listallfoods/listallfoods.component';
import { AddnewuserComponent } from './components/bodies/Users/addnewuser/addnewuser.component';
import { SearchfoodsComponent } from './components/bodies/Foods/searchfoods/searchfoods.component';
import { LoginadminComponent } from './components/bodies/users/loginadmin/loginadmin.component';
import { ChangepasswordComponent } from './components/bodies/users/changepassword/changepassword.component';
import { AdminmenuComponent } from './components/bodies/users/adminmenu/adminmenu.component';
import { AddnewfoodComponent } from './components/bodies/foods/addnewfood/addnewfood.component';
import { DeletefoodComponent } from './components/bodies/foods/deletefood/deletefood.component';


@NgModule({
  declarations: [
    MainmenuComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListallfoodsComponent,
    AddnewuserComponent,
    SearchfoodsComponent,
    LoginadminComponent,
    ChangepasswordComponent,
    AdminmenuComponent,
    AddnewfoodComponent,
    DeletefoodComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(KitchenRoute),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [MainmenuComponent]
})
export class AppModule { }
