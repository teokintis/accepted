import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Store } from 'src/app/store';
import { TeamSummary } from '../models/team-summary';

@Injectable()
export class LeagueService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  getTeams$: Observable<TeamSummary[]> = this.http
  .get('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
  .pipe(
    pluck('teams'),
    map((res) => res as TeamSummary[]),
    tap((res)=> this.store.set('teams', res))
  );

  getSingleTeam$ = (id:string | null): Observable<TeamSummary | undefined> => {
   return this.http
    .get('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
    .pipe(
      pluck('teams'),
      map((res) => (res as TeamSummary[]).find(team=>team.idTeam === id)),
      tap((res)=> this.store.set('selectedTeam', res))
    )
  }


}
