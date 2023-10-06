import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  discardPeriodicTasks,
} from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
    });
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia empezar a contar cuando presiono start', fakeAsync(() => {
    component.time = 0;

    component.start();
    tick(3000);
    expect(component.time).toBeGreaterThan(2);
    discardPeriodicTasks();
  }));
  it('deberia empezar a contar cuando presiono start pero si presiona stop no seguir contando', fakeAsync(() => {
    component.time = 0;

    component.start();
    tick(3000);
    component.stop();
    tick(3000);
    expect(component.time).toBe(3);
    discardPeriodicTasks();
  }));
});
