import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfeComponent } from './elfe.component';

describe('ElfeComponent', () => {
  let component: ElfeComponent;
  let fixture: ComponentFixture<ElfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
