import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnauthorizeComponent } from './dialog-unauthorize.component';

describe('DialogUnauthorizeComponent', () => {
  let component: DialogUnauthorizeComponent;
  let fixture: ComponentFixture<DialogUnauthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUnauthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUnauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
