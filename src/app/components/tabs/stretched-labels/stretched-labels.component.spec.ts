import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchedLabelsComponent } from './stretched-labels.component';

describe('StretchedLabelsComponent', () => {
  let component: StretchedLabelsComponent;
  let fixture: ComponentFixture<StretchedLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StretchedLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchedLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
