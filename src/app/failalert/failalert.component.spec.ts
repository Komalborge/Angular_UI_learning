import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailalertComponent } from './failalert.component';

describe('FailalertComponent', () => {
  let component: FailalertComponent;
  let fixture: ComponentFixture<FailalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
