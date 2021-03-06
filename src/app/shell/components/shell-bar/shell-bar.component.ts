import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-shell-bar',
  templateUrl: './shell-bar.component.html',
  styleUrls: ['./shell-bar.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ShellBarComponent implements OnInit {
  @Input() mode$: Observable<'light' | 'dark'> = of('light');
  @Input() history$:Observable<string[]> = of([]);
  @Output() updateMode = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateMode(mode:'light' | 'dark'){
    this.updateMode.emit(mode);
  }

  onBack(){
    this.back.emit();
  }

}
