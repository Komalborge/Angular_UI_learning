import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveassign1Component } from './reactiveassign1.component';

describe('Reactiveassign1Component', () => {
  let component: Reactiveassign1Component;
  let fixture: ComponentFixture<Reactiveassign1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveassign1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveassign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
