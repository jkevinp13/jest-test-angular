import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment the counter when increment is called', () => {
    //arrange
    let value = 1;
    component.counter = value;

    //action
    component.increment();

    //assert
    expect(component.counter).toBe(value + 1);
    expect(component.counter).toBeGreaterThan(value);
  });
  it('should decrement the counter when decrement is called', () => {
    //arrange
    let value = 1;
    component.counter = value;

    //action
    component.decrement();

    //assert
    expect(component.counter).toBe(value - 1);

    expect(component.counter).toBeLessThan(value);
  });
});
