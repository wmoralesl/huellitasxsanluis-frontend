// src/app/components/logout/logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true, // 👈 ¡Importante!
  imports: [CommonModule], // 👈 Módulos requeridos (si usa *ngIf, *ngFor, etc.)
  template: `
    <button (click)="onLogout()" class="btn btn-danger">Cerrar Sesión</button>
  `,
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout().subscribe({
      next: () => console.log('Sesión cerrada'),
      error: (err) => console.error('Error al cerrar sesión', err),
    });
  }
}