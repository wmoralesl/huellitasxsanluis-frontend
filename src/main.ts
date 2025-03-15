import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Proporciona HttpClient globalmente
  ]
}).catch(err => console.error(err));