import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./soccer-components/Overview/overview.component";
import {TestComponent} from "./soccer-components/Overview/test.component";
import {CreatePlayerComponent} from "./soccer-components/create-player/create-player.component";
import {PlayersComponent} from "./soccer-components/list-players/players.component";
import {PlayerDetailComponent} from "./soccer-components/player-details/player.details.component";

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
      {path: 'createplayer', component: CreatePlayerComponent},
      {path: 'listplayers', component: PlayersComponent},
      {path: 'playerdetails/:id', component: PlayerDetailComponent},
    ]
  },

  {
    path: 'about', component: TestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AngularProjectSoccerRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
