import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public id = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {

  }

}
