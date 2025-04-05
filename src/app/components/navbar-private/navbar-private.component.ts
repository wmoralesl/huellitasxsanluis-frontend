import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-private',
  standalone: true,
  imports: [HomeComponent, RouterLink],
  templateUrl: './navbar-private.component.html',
  styleUrl: './navbar-private.component.css'
})
export class NavbarPrivateComponent {

}
