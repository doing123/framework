import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhangsanComponent } from './zhangsan.component';

describe('ZhangsanComponent', () => {
  let component: ZhangsanComponent;
  let fixture: ComponentFixture<ZhangsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhangsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhangsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
