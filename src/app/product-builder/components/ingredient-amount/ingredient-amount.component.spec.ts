import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAmountComponent } from './ingredient-amount.component';

describe('IngredientAmountComponent', () => {
  let component: IngredientAmountComponent;
  let fixture: ComponentFixture<IngredientAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
