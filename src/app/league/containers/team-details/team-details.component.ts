import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Store } from 'src/app/store';
import { TeamSummary } from '../../models/team-summary';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  team$:Observable<TeamSummary> | undefined;

  constructor(private route: ActivatedRoute,
    private leagueService:LeagueService,
    private store: Store) { }

  ngOnInit(): void {
    this.team$ = this.store.select('selectedTeam');
    this.route.paramMap.pipe(
      mergeMap((paramMap)=>this.leagueService.getSingleTeam$(paramMap.get('id')))
    ).subscribe();
  }

}
