
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Office.initialize = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => console.error(error));
};
