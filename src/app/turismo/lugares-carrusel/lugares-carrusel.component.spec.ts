import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresCarruselComponent } from './lugares-carrusel.component';

describe('LugaresCarruselComponent', () => {
  let component: LugaresCarruselComponent;
  let fixture: ComponentFixture<LugaresCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
