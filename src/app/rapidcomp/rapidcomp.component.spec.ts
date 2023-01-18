import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidcompComponent } from './rapidcomp.component';

describe('RapidcompComponent', () => {
  let component: RapidcompComponent;
  let fixture: ComponentFixture<RapidcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
