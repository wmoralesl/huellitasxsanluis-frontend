import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { PrivatehomeComponent } from '../../features/privatehome/privatehome.component'
import { AppComponent } from '../components/app.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: PrivatehomeComponent},
  { path: '', component: AppComponent }
];