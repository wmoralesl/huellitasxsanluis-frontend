import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3048';
  private http = inject(HttpClient);
  private router = inject(Router); // <--- Cambiar constructor por inject()

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password }).pipe(
      tap((response:any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']); // <--- No necesita this.router.navigate ahora
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
