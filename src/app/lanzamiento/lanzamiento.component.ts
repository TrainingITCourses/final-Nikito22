import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {

  public id = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
  }

}
