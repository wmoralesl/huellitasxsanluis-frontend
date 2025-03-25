import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrivatehomeComponent } from '../app/features/privatehome/privatehome.component'

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: PrivatehomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];