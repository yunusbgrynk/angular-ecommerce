import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CategoryComponent } from './category/category.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { from } from 'rxjs';
import { ProductAddForms1Component } from './middle-part/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './middle-part/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MiddlePartComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
