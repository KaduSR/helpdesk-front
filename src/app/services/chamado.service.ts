import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  constructor(private http: HttpClient) {}

  // private _http : HttpClient) { }
  findall(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.baseURL}/chamados`);
  }
}
