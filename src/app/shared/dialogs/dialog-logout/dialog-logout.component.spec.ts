import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogoutComponent } from './dialog-logout.component';

describe('DialogLogoutComponent', () => {
  let component: DialogLogoutComponent;
  let fixture: ComponentFixture<DialogLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
