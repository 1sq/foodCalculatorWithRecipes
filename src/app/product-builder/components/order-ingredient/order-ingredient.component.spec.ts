import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIngredientComponent } from './order-ingredient.component';

describe('OrderIngredientComponent', () => {
  let component: OrderIngredientComponent;
  let fixture: ComponentFixture<OrderIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
