import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/core/components/app.component';
import { config } from './app/core/config/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
