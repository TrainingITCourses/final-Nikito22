import { Component, OnInit } from '@angular/core';
import { IsaState } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CambioOpcion } from '../store/isa.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isa$: Observable<any>;
  private numLanzamientos: Number;
  constructor(private store: Store<IsaState>) { }

  ngOnInit() {
    this.isa$ = this.store.select('isa');
    this.store.select('isa').subscribe(s => this.numLanzamientos = s.lanzamientos.length);
    this.store.dispatch(new CambioOpcion({ opcion: 'Menu', info: this.numLanzamientos + ' Lanzamientos' }));
  }
}
