import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // para ngIf, ngFor y otras directivas comunes
import { RouterModule } from '@angular/router'; // routerLink para navegación
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-privatehome',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoutComponent], 
  templateUrl: './privatehome.component.html',
  styleUrls: ['./privatehome.component.css']
})
export class PrivatehomeComponent implements OnInit{
  userData: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe(
      (data) => {
        this.userData = data; // Almacena los datos del usuario
      },
      (error) => {
        console.error('Error fetching user data', error); // Maneja el error en caso de fallo
      }
    );
  }

}
