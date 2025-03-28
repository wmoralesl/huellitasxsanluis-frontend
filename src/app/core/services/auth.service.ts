import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
          try {
            localStorage.setItem('token', response.token);
          } catch (e) {
            console.error('Error al guardar el token en localStorage', e);
          }
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
    return typeof localStorage !== 'undefined' && !!localStorage.getItem('token');
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    
    const headers = token 
      ? new HttpHeaders().set('Authorization', `Bearer ${token}`) 
      : new HttpHeaders();
  
    return this.http.get(`${this.apiUrl}/api/auth/me`, { headers });
  }



}