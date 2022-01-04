import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterChange = new EventEmitter<any>();
  value = Filters.ALL;
  options=[{value:Filters.ALL, name:'All categories'}, {value:Filters.FAVORITES, name:'Favorites'}, {value:Filters.STADIUMS, name:'Large Stadiums'}];

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(){
    this.filterChange.emit(this.value);
  }

}

export enum Filters{
  ALL,
  FAVORITES,
  STADIUMS
}
