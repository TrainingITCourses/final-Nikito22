import { CargarEstados, CargarLanzamientos } from './store/isa.actions';
import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import {
  IsaState
} from './store/index';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public isa$ = this.store.select('isa');

  constructor(private store: Store<IsaState>) { }

  ngOnInit() {
    this.store.dispatch(new CargarLanzamientos);
    this.store.dispatch(new CargarEstados);
  }
}
