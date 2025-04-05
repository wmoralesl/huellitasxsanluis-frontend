import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`, // No tiene contenido propio, solo gestiona las rutas
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'angular-login';
}
