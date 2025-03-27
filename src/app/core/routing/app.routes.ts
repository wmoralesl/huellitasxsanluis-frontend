import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { PrivatehomeComponent } from '../../features/privatehome/privatehome.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la raíz a /login
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: PrivatehomeComponent },
  { path: '**', redirectTo: '/login' } // Redirige cualquier ruta desconocida
];
