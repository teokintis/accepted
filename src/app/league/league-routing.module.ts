import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './containers/team-details/team-details.component';
import { TeamsComponent } from './containers/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TeamsComponent },
      { path: ':id', component: TeamDetailsComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
