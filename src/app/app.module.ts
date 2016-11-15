import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation-component/navigation.comonent";
import {RouterModule} from "@angular/router";
import {routing} from "./app-routing.module";
import {OverviewComponent} from "./soccer-components/overview.component";
import {TestComponent} from "./soccer-components/test.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
