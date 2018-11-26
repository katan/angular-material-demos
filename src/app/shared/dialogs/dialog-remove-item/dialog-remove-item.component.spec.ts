import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoveItemComponent } from './dialog-remove-item.component';

describe('DialogRemoveItemComponent', () => {
  let component: DialogRemoveItemComponent;
  let fixture: ComponentFixture<DialogRemoveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRemoveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRemoveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
