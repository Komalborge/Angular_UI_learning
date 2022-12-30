import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValidationformComponent } from './simple-validationform.component';

describe('SimpleValidationformComponent', () => {
  let component: SimpleValidationformComponent;
  let fixture: ComponentFixture<SimpleValidationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleValidationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleValidationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
