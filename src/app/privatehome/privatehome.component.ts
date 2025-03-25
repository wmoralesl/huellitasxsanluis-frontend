import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 Importa esto
import { RouterModule } from '@angular/router'; // 🔥 Si usas routerLink
import { LogoutComponent } from '../logout.component';

@Component({
  selector: 'app-privatehome',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoutComponent], // 🔥 Agrega CommonModule y RouterModule
  templateUrl: './privatehome.component.html',
  styleUrls: ['./privatehome.component.css']
})
export class PrivatehomeComponent {}
