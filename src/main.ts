import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Importa la configuración
import { AppComponent } from './app/core/components/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => {
  console.error('Error en el inicio de la aplicación', err);
});
