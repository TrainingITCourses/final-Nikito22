import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public id = '';

  public lanzamientos = [100, 101, 102];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() { }

}
