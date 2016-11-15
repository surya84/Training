import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from "./components/user.list.component";
import { NavComponent } from "./components/nav/nav.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, UserListComponent, NavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
