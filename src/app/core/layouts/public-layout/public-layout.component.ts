import { Component } from '@angular/core';
import { NavbarPublicComponent } from '../../components/navbar-public/navbar-public.component';
import { FooterPublicComponent } from '../../components/footer-public/footer-public.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [NavbarPublicComponent, FooterPublicComponent, RouterOutlet, RouterModule],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {

}
