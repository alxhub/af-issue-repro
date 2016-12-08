import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2';

@Injectable()
export class DbService {
  constructor(public afdb: AngularFireDatabase) {}
}