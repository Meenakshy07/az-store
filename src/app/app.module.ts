import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StorecomponentComponent } from './storecomponent/storecomponent.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    StorecomponentComponent,
    ProductcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
