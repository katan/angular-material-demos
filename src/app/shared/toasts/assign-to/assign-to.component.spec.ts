import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToComponent } from './assign-to.component';

describe('AssignToComponent', () => {
  let component: AssignToComponent;
  let fixture: ComponentFixture<AssignToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
