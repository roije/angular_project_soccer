import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./soccer-components/overview.component";
import {TestComponent} from "./soccer-components/test.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  },

  {
    path: 'players',
    component: OverviewComponent
  },

  {
    path: 'about',
    component: TestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AngularProjectSoccerRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
