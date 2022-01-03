import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './league/containers/team-details/team-details.component';
import { TeamsComponent } from './league/containers/teams/teams.component';

const routes: Routes = [
  {
    path: '' ,
    redirectTo:'teams',
    pathMatch:'full'
  },
  {
    path: 'teams' ,
    component:TeamsComponent
  },
  {
    path: 'teams/:id' ,
    component:TeamDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
