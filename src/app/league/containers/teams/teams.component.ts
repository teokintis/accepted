import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { Store } from 'src/app/store';
import { Filters } from '../../components/filter/filter.component';
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
    this.teams$ = combineLatest(
      [
      this.store.select('teams').pipe(distinctUntilChanged()),
      this.store.select('filterText').pipe(distinctUntilChanged()),
      this.store.select('filterCategory').pipe(distinctUntilChanged()),
    ])
      .pipe(
        map(([teams, filterText, filterCategory]) =>  {
          const filteredByCategory = this.filterByCategory(teams as any[], filterCategory as Filters);
          return filterText ? (filteredByCategory as any)?.filter((team: any)=>team.strTeam.startsWith(filterText)) : filteredByCategory
        }));

    this.leagueService.getTeams$.pipe(take(1)).subscribe();
  }

  selectTeam(event:any){
    this.router.navigate(['teams', event])
  }

  searchKeyUp(event:any){
    this.store.set('filterText', event);
  }

  filterChange(event: Filters){
    this.store.set('filterCategory', +event);
  }

  private filterByCategory(collection: any[], category: Filters){
    switch (category) {
      case Filters.ALL:
        return collection;
      case Filters.FAVORITES:
        return collection.filter((team: any)=>team.intLoved > 4);
      case Filters.STADIUMS:
        return collection.filter((team: any)=>team.intStadiumCapacity > 45000);
      default:
        return collection;
    }

  }

}
