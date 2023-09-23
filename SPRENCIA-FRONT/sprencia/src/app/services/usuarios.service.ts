import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/usuarios.interface';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = 'http://localhost:3000/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  getById(): Promise<any> {
    const id = localStorage.getItem('id');
    return lastValueFrom(
      this.httpClient.get<User>(`${this.baseUrl}/perfil/${id}`)
    )
  }

  

  getActivitiesDoneByUser(): Promise<any> {
    const id = localStorage.getItem('id');
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/actividades-done/${id}`)
    )
  }

  //Crear un usuario en base de datos desde el formulario registro
  create(formValue: any): Promise<User> {
    return lastValueFrom(
      this.httpClient.post<User>(`${this.baseUrl}/registro`, formValue)
    );
  }

  createAdmin(formValue: any): Promise<User> {
    return lastValueFrom(
      this.httpClient.post<User>(`${this.baseUrl}/create-admin`, formValue)
    );
  }


  login(formValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValue)
    );
  }

  // Recuperacion de login para activar/desactivar funciones de header

  sendEmail(formValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/forget-password`, formValue)
    )
  }

  resetPassword(formValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/reset-password`, formValue)
    )
  }

  isLogged(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // Recuperacion de rol 'admin' para activar/desactivar funciones de header
  isAdmin(): boolean {
    let rol = localStorage.getItem('rol')
    if (rol === 'administrador') {
      return true;
    }
    return false;
  }


}
