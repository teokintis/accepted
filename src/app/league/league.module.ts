import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeagueRoutingModule } from './league-routing.module';

import { TeamsComponent } from './containers/teams/teams.component';
import { TeamDetailsComponent } from './containers/team-details/team-details.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterComponent } from './components/filter/filter.component';

import { LeagueService } from './services/league.service';
import { GetValuePipe } from './pipes/get-value.pipe';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamDetailsComponent,
    TeamCardComponent,
    SearchBarComponent,
    FilterComponent,
    GetValuePipe
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    LeagueService
  ],
})
export class LeagueModule { }
