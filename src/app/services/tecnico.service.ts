import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Tecnico } from './../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${API_CONFIG.baseURL}/tecnicos/${id}`)
  }

  getExistingProfiles(): Observable<Tecnico> {
    // Faça uma solicitação HTTP para obter os perfis existentes do banco de dados
    return this.http.get<Tecnico>(`${API_CONFIG.baseURL}/tecnicos/perfis`)
  }
    // private _http : HttpClient) { }
    findAll(): Observable<Tecnico[]> {
      return this.http.get<Tecnico[]>(`${API_CONFIG.baseURL}/tecnicos`);
    }
    
    create(tecnico: Tecnico): Observable<Tecnico> {
      return this.http.post<Tecnico>(`${API_CONFIG.baseURL}/tecnicos`, tecnico);
    }

    update(tecnico: Tecnico): Observable<Tecnico> {
      return this.http.put<Tecnico>(`${API_CONFIG.baseURL}/tecnicos/${tecnico.id}`, tecnico);
    }
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${API_CONFIG.baseURL}/tecnicos/${id}`);
    }
  }
