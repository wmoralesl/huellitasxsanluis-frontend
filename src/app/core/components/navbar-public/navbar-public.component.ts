import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-public',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './navbar-public.component.html',
  styleUrl: './navbar-public.component.css'
})
export class NavbarPublicComponent {

}
