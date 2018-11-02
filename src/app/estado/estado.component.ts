import { CambioOpcion } from './../store/isa.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IsaState } from '../store';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public id = '';
  public isa$ = this.store.select('isa');

  public lanzamientos = [100, 101, 102];

  constructor(
    private store: Store<IsaState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.store.dispatch(new CambioOpcion({ opcion: 'Estado', info: 'Nombre Estado' }));
  }
}
