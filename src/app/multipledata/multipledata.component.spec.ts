import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipledataComponent } from './multipledata.component';

describe('MultipledataComponent', () => {
  let component: MultipledataComponent;
  let fixture: ComponentFixture<MultipledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
