import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsComponent } from './home-products.component';

describe('HomeProductsComponent', () => {
  let component: HomeProductsComponent;
  let fixture: ComponentFixture<HomeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
