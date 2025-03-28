import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { PrivatehomeComponent } from '../../features/privatehome/privatehome.component';
import { HomeComponent } from '../../pages/home/home.component'
import { PetsComponent } from '../../pages/pets/pets.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pets', component: PetsComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: PrivatehomeComponent },
  { path: '**', redirectTo: '/login' } // Redirige cualquier ruta desconocida
];
