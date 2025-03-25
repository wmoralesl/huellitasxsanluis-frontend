import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <h1>Mi Aplicación Angular</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
