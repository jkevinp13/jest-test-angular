import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, from, takeUntil, of, Subject } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  time = 0;
  stoped = new Subject();
  timer = interval(1000).pipe(takeUntil(this.stoped));

  start() {
    this.timer.subscribe(() => {
      this.time++;
    });
  }
  stop() {
    this.stoped.next(true);
  }
}
