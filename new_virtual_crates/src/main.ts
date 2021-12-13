import { enableProdMode } from '@angular/core';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowser } from '@angular/platform-browser';



if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));
function platformBrowserDynamic(): void {
  throw new Error('Function not implemented.');
}

