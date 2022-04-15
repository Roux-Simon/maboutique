import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './composant/product/product.component';
import { AddProductComponent } from './composant/add-product/add-product.component';
import { HomePageComponent } from './composant/home-page/home-page.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './composant/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    HomePageComponent,
    LoginComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
