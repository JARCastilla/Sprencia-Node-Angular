import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {


  private baseUrl: string;

  // Dentro del constructor inyectamos HttpClient (importado en app.module) para realizar las peticiones sobre la url que establecemos como base
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/actividades';
  }

  // Conseguir todas las actividades
  getAll(): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}`)
    );
  }

  // Conseguir 20 actividades (que serán las visibles en home)
  getAllHome(): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}?limit=3&page=1`)
    );
  }

  getById(pId: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${pId}`)
    );
  }

  getByCategory(): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/categorias`)
    );
  }



  // Crear una actividad
  create(formValue: FormData): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValue)
    );
  }

}
