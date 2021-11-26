import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresTarifasEspecialesComponent } from './lugares-tarifas-especiales.component';

describe('LugaresTarifasEspecialesComponent', () => {
  let component: LugaresTarifasEspecialesComponent;
  let fixture: ComponentFixture<LugaresTarifasEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresTarifasEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresTarifasEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
