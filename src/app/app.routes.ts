import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrivatehomeComponent } from './privatehome/privatehome.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: PrivatehomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];