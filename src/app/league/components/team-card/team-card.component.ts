import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamSummary } from '../../models/team-summary';

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamCardComponent implements OnInit {
  @Input() team: TeamSummary | undefined;
   @Output() selectTeam = new EventEmitter<any>();
  properties = [
    {name:'intFormedYear', value:'Formed Year'},
    {name:'strLeague', value:'League'},
    {name:'strStadium', value:'Stadium'},
  ]
  constructor() { }
  ngOnInit(): void {
  }

  onSelectTeam(){
    this.selectTeam.emit(this.team?.idTeam)
  }

}


