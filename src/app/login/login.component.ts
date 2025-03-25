import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Marca el componente como independiente
  imports: [FormsModule, HttpClientModule, CommonModule], // Importa los módulos necesarios
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
        console.log('Ha iniciado sesion correctamente', response);
        this.router.navigate(['/dashboard']); // Redirigir correctamente
      },
      error => {
        console.error('Error en el login', error);
      }
    );
  }
}