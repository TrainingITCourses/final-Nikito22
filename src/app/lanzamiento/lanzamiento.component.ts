import { CambioOpcion } from './../store/isa.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IsaState } from '../store';
import { LanzamientoState } from './store/lanzamiento.reducer';
import { CargarLanzamiento } from './store/lanzamiento.actions';
import { State } from '../store/isa.reducer';
@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {

  public lanzamiento$ = this.lanzamientoStore.select('lanzamiento');

  constructor(
    private store: Store<IsaState>,
    private lanzamientoStore: Store<LanzamientoState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lanzamientoStore.dispatch(new CargarLanzamiento(params['id']));
    });
    this.lanzamiento$.subscribe(e => {
      this.store.dispatch(new CambioOpcion({
        opcion: 'Lanzamiento',
        info: e.lanzamiento.name
      }));
    });
  }
}
