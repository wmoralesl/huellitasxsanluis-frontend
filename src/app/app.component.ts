import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, // Asegúrate de importar HttpClientModule
  ],
  template: `
    <h1>Mi Aplicación Angular</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}