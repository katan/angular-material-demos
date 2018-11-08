import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFormComponent } from './validation-form.component';

describe('ValidationFormComponent', () => {
  let component: ValidationFormComponent;
  let fixture: ComponentFixture<ValidationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
