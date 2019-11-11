import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StorecomponentComponent } from './storecomponent/storecomponent.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';
const appRoutes: Routes = [
  { path: '', component: ProductcomponentComponent },
  { path: 'addproduct',      component: AddproductComponent },
  { path: 'productdetails',      component: ProductdetailsComponent }
  

];

@NgModule({
  declarations: [
    AppComponent,
    StorecomponentComponent,
    ProductcomponentComponent,
    AddproductComponent,
    ProductdetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } ),
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
