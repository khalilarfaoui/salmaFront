import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private apiUrl = 'http://localhost:5000/Equipe';
  constructor(private http: HttpClient) { }
  getAllEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl);
  }
  getEquipeById(id: string): Observable<Equipe> {
    return this.http.get<Equipe>(this.apiUrl + '/' + id);
  }
  addEquipe(equipe: any , userid:any) {
    const headers = new HttpHeaders().set('id', userid);
    return this.http.post(this.apiUrl, equipe , {headers});
  }
  updateEquipe(equipe: any) {
    return this.http.patch(this.apiUrl + '/' + equipe.ID_Equipe, equipe);
  }
  deleteEquipe(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
