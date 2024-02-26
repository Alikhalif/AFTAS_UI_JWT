import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }

  isJury(): boolean{
    return localStorage.getItem('role') === 'JURY';
  }

  isMemeber(): boolean{
    return localStorage.getItem('role') === 'USER';
  }

  //logout

  logout(){
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  }

  generateRoleTok(): string[]{
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.roles || [];
    }

    return [];

  }

  generateUsernameTok(): string | null {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.username || null;
    }

    return null;
  }

  // getter

  getRole():string|null{
    return localStorage.getItem("role");
  }

  getUsername():string|null{
    return localStorage.getItem("username");
  }

  getId():string|null{
    return localStorage.getItem("id");
  }

  getToken():string|null{
    return localStorage.getItem("token");
  }

  // setter

  setRole(role:string):void{
    localStorage.setItem("role", role);
  }

  setUsername(username: string):void{
    localStorage.setItem("username", username);
  }

  setId(id:string):void{
    localStorage.setItem("id", id);
  }

  setToken(token:string):void{
    localStorage.setItem("token", token);
  }
}
