import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doing123Component } from './doing123.component';

describe('Doing123Component', () => {
  let component: Doing123Component;
  let fixture: ComponentFixture<Doing123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doing123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doing123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
