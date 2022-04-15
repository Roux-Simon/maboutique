import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './composant/add-product/add-product.component';
import { HomePageComponent } from './composant/home-page/home-page.component';
import { LoginComponent } from './composant/login/login.component';
import { ProductComponent } from './composant/product/product.component';


const routes: Routes = [ 
  { path: '', component: HomePageComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }