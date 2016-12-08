import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';

import {RootComponent} from './component';
import {DbService} from './service';

@NgModule({
  bootstrap: [RootComponent],
  declarations: [RootComponent],
  imports: [
    AngularFireModule,
    BrowserModule,
  ],
  providers: [
    DbService,
  ]
})
export class AppModule {}