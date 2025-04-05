import { Component } from '@angular/core';
import { Animal } from '../../../models/animal.model';
import { AnimalsService } from '../../services/pets/pets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  animals: Animal[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private animalsService: AnimalsService) {}
  ngOnInit(): void {
    this.loadAnimals();
  }

  loadAnimals(): void {
    this.isLoading = true;
    this.animalsService.getAllAnimals().subscribe({
      next: (data) => {
        this.animals = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar las mascotas';
        this.isLoading = false;
        console.error('Error:', error);
      }
    });
  }

}
