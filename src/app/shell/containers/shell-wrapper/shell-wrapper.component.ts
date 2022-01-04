import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from 'src/app/store';
import { ShellService } from '../../services/shell.service';

@Component({
  selector: 'app-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
  encapsulation:ViewEncapsulation.None //support dark mode
})
export class ShellWrapperComponent implements OnInit {

  mode$:Observable<'light' | 'dark'> = of('light');
  history$:Observable<string[]> = of([]);

  constructor(private shellService: ShellService,
     private store: Store,
     ) { }

  ngOnInit(): void {
    let mode = localStorage.getItem('mode');
    mode = mode==='light' || mode==='dark' ? mode: 'light'; //avoid null or 'null'
    this.updateMode(mode as 'light' | 'dark');
    this.mode$ = this.store.select('mode');
    this.history$ = this.store.select('history');
  }

  updateMode(mode: 'light' | 'dark'){
    this.shellService.updateMode(mode);
  }

  back(){
    this.shellService.back();
  }

}
