import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDetalleComponent } from './estado-detalle.component';

describe('EstadoDetalleComponent', () => {
  let component: EstadoDetalleComponent;
  let fixture: ComponentFixture<EstadoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
