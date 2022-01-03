import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { State } from './state';
import { BehaviorSubject, Observable } from 'rxjs';

const state: State = {
  teams: undefined,
  selectedTeam: undefined,
  mode:'light'
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    });
  }

}
