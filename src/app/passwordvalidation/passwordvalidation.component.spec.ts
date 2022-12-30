import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordvalidationComponent } from './passwordvalidation.component';

describe('PasswordvalidationComponent', () => {
  let component: PasswordvalidationComponent;
  let fixture: ComponentFixture<PasswordvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
