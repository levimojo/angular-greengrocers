import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import {HttpClientModule} from "@angular/common/http";
import { GroceryCartComponent } from './grocery-cart/grocery-cart.component';
import { GroceryTotalComponent } from './grocery-total/grocery-total.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, GroceryListComponent, GroceryCartComponent, GroceryTotalComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
