import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorStepsComponent } from './calculator-steps.component';

describe('CalculatorStepsComponent', () => {
  let component: CalculatorStepsComponent;
  let fixture: ComponentFixture<CalculatorStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
