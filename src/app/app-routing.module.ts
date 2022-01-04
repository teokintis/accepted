import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' ,
    redirectTo:'teams',
    pathMatch:'full'
  },
  {
    path: 'teams' ,
    loadChildren: () => import('./league/league.module').then((m) => m.LeagueModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
