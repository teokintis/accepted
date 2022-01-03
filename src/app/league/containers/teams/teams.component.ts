import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith, take, tap } from 'rxjs/operators';
import { Store } from 'src/app/store';
import { TeamSummary } from '../../models/team-summary';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams$:Observable<TeamSummary[]> = of([]);

  constructor(private store: Store,
    private leagueService: LeagueService,
    private router: Router
    )  { }

  ngOnInit(): void {
    this.teams$ = combineLatest([this.store.select('teams'), this.store.select('filterText').pipe(distinctUntilChanged())])
      .pipe(
        map(([teams, filterText]) =>  {
          return filterText ? (teams as any)?.filter((team: any)=>team.strTeam.startsWith(filterText)) : teams
        }));

    this.leagueService.getTeams$.pipe(take(1)).subscribe();
  }

  selectTeam(event:any){
    this.router.navigate(['teams', event])
  }

  searchKeyUp(event:any){
    this.store.set('filterText', event);
  }

}
