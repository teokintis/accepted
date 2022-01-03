import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() searchKeyUp = new EventEmitter<any>();

  value='';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(){
    this.searchKeyUp.emit(this.value);
  }

}
