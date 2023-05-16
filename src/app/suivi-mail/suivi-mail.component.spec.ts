import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviMailComponent } from './suivi-mail.component';

describe('SuiviMailComponent', () => {
  let component: SuiviMailComponent;
  let fixture: ComponentFixture<SuiviMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
