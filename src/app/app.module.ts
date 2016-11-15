import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation-component/navigation.comonent";
import {RouterModule} from "@angular/router";
import {routing} from "./app-routing.module";
import {OverviewComponent} from "./soccer-components/Overview/overview.component";
import {TestComponent} from "./soccer-components/Overview/test.component";
import { CreatePlayerComponent } from './soccer-components/create-player/create-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    TestComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule // Form listener for changes (https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
