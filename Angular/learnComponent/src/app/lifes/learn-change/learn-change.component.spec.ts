import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnChangeComponent } from './learn-change.component';

describe('LearnChangeComponent', () => {
  let component: LearnChangeComponent;
  let fixture: ComponentFixture<LearnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
