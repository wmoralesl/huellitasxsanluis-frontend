import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para ngIf, ngFor y otras directivas comunes
import { RouterModule } from '@angular/router'; // routerLink para navegación
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-privatehome',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoutComponent], 
  templateUrl: './privatehome.component.html',
  styleUrls: ['./privatehome.component.css']
})
export class PrivatehomeComponent {}
