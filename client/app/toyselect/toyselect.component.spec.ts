import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyselectComponent } from './toyselect.component';

describe('ToyselectComponent', () => {
  let component: ToyselectComponent;
  let fixture: ComponentFixture<ToyselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
