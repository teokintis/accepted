import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from 'src/app/store';
import { Location } from '@angular/common'
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShellService {


  constructor(private router: Router, private location: Location, private store: Store) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event)=>{
     const history = ( (event as NavigationEnd).urlAfterRedirects.split('/') ?? []).filter(h=>h!=='');
      this.store.set('history', history);
    });

  }

  updateMode(mode:'light' | 'dark'){
    this.store.set('mode', mode);
    localStorage.setItem('mode',mode);
  }


  back(): void {
    if ((this.store.value.history ?? []).length > 1)
      this.location.back()
  }
}
