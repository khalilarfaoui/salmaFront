import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl = 'http://localhost:5000/Reclamation';
  constructor(private http: HttpClient) { }
  getAllRecalamation() {
    return this.http.get(this.apiUrl);
  }
  getRecalaùationById(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }
  addRecalaùation(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
