import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IsaState } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CambioOpcion } from '../store/isa.actions';
import { EstadoState } from '../estado/store/estado.reducer';
import { CargarEstado } from '../estado/store/estado.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isa$ = this.store.select('isa');

  private numLanzamientos: Number;

  constructor(
    private store: Store<IsaState>,
    private estadoStore: Store<EstadoState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select('isa').subscribe(s => this.numLanzamientos = s.lanzamientos.length);
    this.store.dispatch(new CambioOpcion({ opcion: 'Menu', info: this.numLanzamientos + ' Lanzamientos' }));
  }

  irEstado(id: string) {
    this.router.navigateByUrl('/estado/' + id);
  }
}
