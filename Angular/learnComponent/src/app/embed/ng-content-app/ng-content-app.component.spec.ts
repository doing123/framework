import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentAppComponent } from './ng-content-app.component';

describe('NgContentAppComponent', () => {
  let component: NgContentAppComponent;
  let fixture: ComponentFixture<NgContentAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
