import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors  } from '@angular/common/http';

import { routes } from './core/routing/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { authInterceptor } from './services/interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor]) 
    ),
  ]
};
