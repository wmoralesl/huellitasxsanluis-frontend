import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-public',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './navbar-public.component.html',
  styleUrl: './navbar-public.component.css'
})
export class NavbarPublicComponent {
  isLogin:boolean = false;

  constructor(private authService: AuthService) {
    this.checkLoginStatus();
  }

  private checkLoginStatus(): void {
    this.isLogin = this.authService.isLoggedIn();
  }


}
