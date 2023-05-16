import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RessourceMateriel } from '../models/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private apiUrl = 'http://localhost:5000/RessourceMateriel';
  constructor(private http: HttpClient) { }
  getAllMaterials() {
    return this.http.get(this.apiUrl);
  }
  getMaterialById(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }
  addMaterial(material: any) {
    return this.http.post(this.apiUrl, material);
  }
  updateMaterial(material: any) {
    return this.http.patch(this.apiUrl + '/' + material.uuid, material);
  }

  delete(data : any){
    return this.http.delete(this.apiUrl + '/' + data.uuid);
  }


}
