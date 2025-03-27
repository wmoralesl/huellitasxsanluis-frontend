import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/core/components/app.component';
import { routes } from './app/core/routing/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Proporciona HttpClient globalmente
    provideRouter(routes)
  ]
}).catch(err => console.error('Aca el error',err));