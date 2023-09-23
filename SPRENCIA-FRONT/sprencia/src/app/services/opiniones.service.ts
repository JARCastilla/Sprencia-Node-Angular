import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/comentarios';
  }

  getByActivityId(id: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/actividades/${id}`)
    );
  }

}



