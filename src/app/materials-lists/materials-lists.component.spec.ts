import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsListsComponent } from './materials-lists.component';

describe('MaterialsListsComponent', () => {
  let component: MaterialsListsComponent;
  let fixture: ComponentFixture<MaterialsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
