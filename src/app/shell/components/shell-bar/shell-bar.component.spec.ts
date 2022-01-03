import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellBarComponent } from './shell-bar.component';

describe('ShellBarComponent', () => {
  let component: ShellBarComponent;
  let fixture: ComponentFixture<ShellBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
