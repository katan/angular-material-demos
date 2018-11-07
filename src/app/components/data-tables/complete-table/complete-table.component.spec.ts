import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTableComponent } from './complete-table.component';

describe('CompleteTableComponent', () => {
  let component: CompleteTableComponent;
  let fixture: ComponentFixture<CompleteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
