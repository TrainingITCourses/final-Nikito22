import { CambioOpcion } from './../store/isa.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IsaState } from '../store';
import { EstadoState } from './store/estado.reducer';
import { CargarEstado } from './store/estado.actions';
import { State } from '../store/isa.reducer';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public estado$ = this.estadoStore.select('estado');

  constructor(
    private store: Store<IsaState>,
    private estadoStore: Store<EstadoState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.estadoStore.dispatch(new CargarEstado(params['id']));
    });
    this.estado$.subscribe(e => {
      this.store.dispatch(new CambioOpcion({
        opcion: 'Estado',
        info: e.estado.name + ' (' + e.lanzamientos.length + ' lanzamientos)'
      }));
    });
  }
}
