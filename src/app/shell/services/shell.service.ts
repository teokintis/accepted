import { Injectable } from '@angular/core';
import { Store } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor(private store: Store) { }

  updateMode(mode:'light' | 'dark'){
    this.store.set('mode', mode);
    localStorage.setItem('mode',mode);
  }
}
