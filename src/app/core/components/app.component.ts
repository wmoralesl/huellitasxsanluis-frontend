import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Opcional si tienes estilos
  imports: [CommonModule, RouterOutlet], 
})
export class AppComponent {
  title = 'angular-login';
}
