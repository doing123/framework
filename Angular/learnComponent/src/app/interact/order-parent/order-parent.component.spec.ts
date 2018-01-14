import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderParentComponent } from './order-parent.component';

describe('OrderParentComponent', () => {
  let component: OrderParentComponent;
  let fixture: ComponentFixture<OrderParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
