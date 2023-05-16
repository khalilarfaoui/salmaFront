import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhListsComponent } from './rh-lists.component';

describe('RhListsComponent', () => {
  let component: RhListsComponent;
  let fixture: ComponentFixture<RhListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
