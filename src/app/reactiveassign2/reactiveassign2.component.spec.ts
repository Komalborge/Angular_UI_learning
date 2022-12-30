import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveassign2Component } from './reactiveassign2.component';

describe('Reactiveassign2Component', () => {
  let component: Reactiveassign2Component;
  let fixture: ComponentFixture<Reactiveassign2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveassign2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveassign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
