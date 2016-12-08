import {Component} from '@angular/core';

import {DbService} from './service';

@Component({
  selector: 'root-cmp',
  template: `
<h1>I am root</h1>
<h2>DbService is {{db}}</h2>
`
})
export class RootComponent {

  constructor(public db: DbService) {}
}