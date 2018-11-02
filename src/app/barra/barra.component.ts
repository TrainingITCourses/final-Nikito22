import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IsaState } from '../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  public isa$: Observable<any>;

  constructor(private store: Store<IsaState>,
    public router: Router) { }

  ngOnInit() {
    this.isa$ = this.store.select('isa');
  }
}
