import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./soccer-components/Overview/overview.component";
import {TestComponent} from "./soccer-components/Overview/test.component";
import {CreatePlayerComponent} from "./soccer-components/create-player/create-player.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  },

  {
    path: 'players',
    component: OverviewComponent,
    children: [
      {path: '' },
      {path: 'createplayer', component: CreatePlayerComponent}
    ]
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
