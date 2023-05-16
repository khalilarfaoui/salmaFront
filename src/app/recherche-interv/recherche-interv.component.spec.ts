import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheIntervComponent } from './recherche-interv.component';

describe('RechercheIntervComponent', () => {
  let component: RechercheIntervComponent;
  let fixture: ComponentFixture<RechercheIntervComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheIntervComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheIntervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
