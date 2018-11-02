import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lanzamiento-detalle',
  templateUrl: './lanzamiento-detalle.component.html',
  styleUrls: ['./lanzamiento-detalle.component.css']
})
export class LanzamientoDetalleComponent implements OnInit {

  @Input() lanzamiento: any;

  constructor() { }

  ngOnInit() {
  }

}
