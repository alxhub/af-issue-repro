import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../ngfactory/src/module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);