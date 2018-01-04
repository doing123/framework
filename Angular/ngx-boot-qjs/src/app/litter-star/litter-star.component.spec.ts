import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterStarComponent } from './litter-star.component';

describe('LitterStarComponent', () => {
  let component: LitterStarComponent;
  let fixture: ComponentFixture<LitterStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitterStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitterStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
