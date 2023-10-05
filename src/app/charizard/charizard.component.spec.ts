import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from './charizard.component';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharizardComponent]
    });
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
