import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchKeyUp = new EventEmitter<any>();

  value='';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(){
    this.searchKeyUp.emit(this.value);
  }

}
