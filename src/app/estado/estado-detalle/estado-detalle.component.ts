import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estado-detalle',
  templateUrl: './estado-detalle.component.html',
  styleUrls: ['./estado-detalle.component.css']
})
export class EstadoDetalleComponent implements OnInit {

  @Input() id = 0;

  constructor() { }

  ngOnInit() {
  }

}
