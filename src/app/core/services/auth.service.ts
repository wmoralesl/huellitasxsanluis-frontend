import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3048';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/api/auth/login`, body).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Guarda el token en el localStorage
        }
      })
    );
  }
  
  logout(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtiene el token de localStorage
    const headers = { Authorization: `Bearer ${token}` }; // Crea el encabezado con el token
    
    return this.http.post(`${this.apiUrl}/api/auth/logout`, {}, { headers }).pipe( // Envía el token en los encabezados
      tap(() => {
        localStorage.removeItem('token'); // Elimina el token del localStorage
        this.router.navigate(['/login']); // Redirige al login
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Verifica si hay un token
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` }; // Crea el encabezado con el token
    
    return this.http.get(`${this.apiUrl}/api/auth/me`, { headers }); // Hace la solicitud GET para obtener los datos del usuario
  }



}