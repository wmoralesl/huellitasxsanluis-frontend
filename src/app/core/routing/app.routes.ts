import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { PrivatehomeComponent } from '../../features/privatehome/privatehome.component';
import { HomeComponent } from '../../pages/home/home.component'
import { PetsComponent } from '../../pages/pets/pets.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { PublicLayoutComponent } from '../layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from '../layouts/private-layout/private-layout.component';
import { authGuard } from '../../services/interceptor/auth.guard';

export const routes: Routes = [

  {
    path: '',
    component: PublicLayoutComponent,
    children:[
      { path: '', component: HomeComponent},
      { path: 'pets', component: PetsComponent },
      { path: 'about-us', component: AboutUsComponent},
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'dashboard',
    component: PrivateLayoutComponent,
    children:[
      { 
        path: '**',
        component: PrivatehomeComponent,
        canActivate: [authGuard] 
      }
        , // Redirige cualquier ruta desconocida
    ]
  },
];
