import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../../../../models/animal.model'; // Asegúrate de tener este modelo definido
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = environment.apiBaseUrl + '/api/animals'; // Asegúrate de configurar tu environment

  constructor(private http: HttpClient) { }

  // Obtener listado de todas las mascotas
  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  // Obtener detalles de una mascota específica
  getAnimalById(animal_id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${animal_id}`);
  }

  // Registrar una nueva mascota (requiere autenticación)
  createAnimal(animal: Animal, token: string): Observable<Animal> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Animal>(this.apiUrl, animal, { headers });
  }

  // Actualizar una mascota existente
  updateAnimal(animal_id: number, animal: Animal, token: string): Observable<Animal> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Animal>(`${this.apiUrl}/${animal_id}`, animal, { headers });
  }

  // Eliminar (desactivar) una mascota (solo admin)
  deleteAnimal(animal_id: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/${animal_id}`, { headers });
  }
}