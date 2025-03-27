import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Indica que es un componente standalone
  imports: [FormsModule, CommonModule, RouterModule], // Añadir RouterModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Ha iniciado sesión correctamente', response);
        this.router.navigate(['/dashboard']); // Redirige correctamente
      },
      error => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }
}
