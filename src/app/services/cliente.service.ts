import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.baseURL}/clientes/${id}`)
  }

    // private _http : HttpClient) { }
    findAll(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(`${API_CONFIG.baseURL}/clientes`);
    }
    
    create(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(`${API_CONFIG.baseURL}/clientes`, cliente);
    }

    update(cliente: Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(`${API_CONFIG.baseURL}/clientes/${cliente.id}`, cliente);
    }
    delete(cliente: Cliente): Observable<Cliente> {
      return this.http.delete<Cliente>(`${API_CONFIG.baseURL}/clientes/${cliente.id}`);
    }
  }
