
import { Routes } from "@angular/router";
import { AddnewfoodComponent } from "./components/bodies/foods/addnewfood/addnewfood.component";
import { DeletefoodComponent } from "./components/bodies/foods/deletefood/deletefood.component";
import { ListallfoodsComponent } from "./components/bodies/Foods/listallfoods/listallfoods.component";
import { AdminmenuComponent } from "./components/bodies/users/adminmenu/adminmenu.component";
import { ChangepasswordComponent } from "./components/bodies/users/changepassword/changepassword.component";
import { LoginadminComponent } from "./components/bodies/users/loginadmin/loginadmin.component";
import { HomeComponent } from "./components/menus/home/home.component";
import { PageNotFoundComponent } from "./components/menus/page-not-found/page-not-found.component";



export const KitchenRoute: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'adminlogin', component: LoginadminComponent },
    { path: 'adminmenu', component: AdminmenuComponent},
    { path: 'listallfoods', component: ListallfoodsComponent },
    { path: 'addnewfood', component: AddnewfoodComponent },
    { path: 'deletefood/:idfood', component: DeletefoodComponent },
    { path: 'changepassword', component: ChangepasswordComponent},
    { path: '**', component: PageNotFoundComponent }
]

