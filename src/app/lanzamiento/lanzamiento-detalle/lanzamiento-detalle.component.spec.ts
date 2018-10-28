import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientoDetalleComponent } from './lanzamiento-detalle.component';

describe('LanzamientoDetalleComponent', () => {
  let component: LanzamientoDetalleComponent;
  let fixture: ComponentFixture<LanzamientoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanzamientoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanzamientoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
