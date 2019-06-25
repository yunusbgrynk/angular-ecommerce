import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ProductAddForms1Component } from './middle-part/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './middle-part/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'products',component:MiddlePartComponent},
  {path:'product-add-1',component:ProductAddForms1Component,canActivate:[LoginGuard]},
  {path:'product-add-2',component:ProductAddForms2Component,canActivate:[LoginGuard]},
  {path:'',redirectTo : 'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component:MiddlePartComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
