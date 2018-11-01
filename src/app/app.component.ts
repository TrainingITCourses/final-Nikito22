import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import {
  IsaState
} from './store/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public isa: any;

  constructor(private store: Store<IsaState>) { }

  ngOnInit = () => this.store.select('isa').subscribe(value => this.isa = value);
}
