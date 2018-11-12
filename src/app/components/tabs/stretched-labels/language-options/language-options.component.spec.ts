import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageOptionsComponent } from './language-options.component';

describe('LanguageOptionsComponent', () => {
  let component: LanguageOptionsComponent;
  let fixture: ComponentFixture<LanguageOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
