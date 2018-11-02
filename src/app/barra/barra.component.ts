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

  public isa$ = this.store.select('isa');

  constructor(private store: Store<IsaState>,
    public router: Router) { }

  ngOnInit() { }
}
