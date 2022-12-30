import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassalertComponent } from './passalert.component';

describe('PassalertComponent', () => {
  let component: PassalertComponent;
  let fixture: ComponentFixture<PassalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
