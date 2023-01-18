import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesassignComponent } from './pipesassign.component';

describe('PipesassignComponent', () => {
  let component: PipesassignComponent;
  let fixture: ComponentFixture<PipesassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
