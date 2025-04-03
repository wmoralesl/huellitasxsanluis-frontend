import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3048';
  private authStatusSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    // Verificar el estado de autenticación al inicializar el servicio
    this.checkAuthStatus();
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/api/auth/login`, body).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setAuthData(response.token);
          this.authStatusSubject.next(true);
        }
      })
    );
  }

  logout(): Observable<any> {
    const token = this.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    
    return this.http.post(`${this.apiUrl}/api/auth/logout`, {}, { headers }).pipe(
      tap(() => {
        this.clearAuthData();
        this.authStatusSubject.next(false);
        this.router.navigate(['/login']);
      })
    );
  }

  // Nuevo método para verificar autenticación como Observable
  isAuthenticated(): Observable<boolean> {
    return this.authStatusSubject.asObservable();
  }

  // Método para verificación síncrona (manteniendo compatibilidad)
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  getUserData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/auth/me`, { 
      headers: this.getAuthHeaders() 
    });
  }

  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  }

  // Métodos privados de ayuda
  private setAuthData(token: string): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
      // Si el token contiene expiración, podrías guardarla también
      // const tokenData = this.parseJwt(token);
      // if (tokenData.exp) {
      //   localStorage.setItem('token_exp', tokenData.exp.toString());
      // }
    } catch (e) {
      console.error('Error al guardar datos de autenticación', e);
    }
  }

  private clearAuthData(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    // localStorage.removeItem('token_exp');
  }

  private checkAuthStatus(): void {
    const isAuthenticated = this.isLoggedIn();
    this.authStatusSubject.next(isAuthenticated);
    
    // Si quieres hacer logout automático al expirar:
    // const token = this.getToken();
    // if (token && this.isTokenExpired(token)) {
    //   this.clearAuthData();
    //   this.authStatusSubject.next(false);
    // }
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : new HttpHeaders();
  }

  private isTokenExpired(token: string): boolean {
    try {
      const tokenData = this.parseJwt(token);
      if (tokenData.exp) {
        return Date.now() >= tokenData.exp * 1000;
      }
      return false;
    } catch {
      return true;
    }
  }

  private parseJwt(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
}