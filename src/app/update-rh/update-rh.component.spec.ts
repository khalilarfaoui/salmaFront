import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRhComponent } from './update-rh.component';

describe('UpdateRhComponent', () => {
  let component: UpdateRhComponent;
  let fixture: ComponentFixture<UpdateRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
