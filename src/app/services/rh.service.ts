import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RessourceHumaineAttributes } from '../models/rh';

@Injectable({
  providedIn: 'root'
})
export class RhService {
  private apiUrl = 'http://localhost:5000/RessourceHumaine'; 

  constructor(private http: HttpClient) { }

  // READ (get all RHs)
  getAllRhs(): Observable<RessourceHumaineAttributes[]> {
    return this.http.get<RessourceHumaineAttributes[]>(this.apiUrl);
  }

  // READ (get a single RH)
  getRhById(id: string): Observable<RessourceHumaineAttributes> {
    const url = `${ this.apiUrl }/${id}`;
    return this.http.get<RessourceHumaineAttributes>(url);
  }

  // CREATE (add a new RH)
  addRh(RH: any) {
    return this.http.post(this.apiUrl, RH);
  }

  // UPDATE (update an existing RH)
  updateRH(RH: any) {
    const url = `${ this.apiUrl }/${RH.identifiant}`;
    return this.http.patch(url, RH);
  }
  delete(id : any){
    return this.http.delete('http://localhost:5000/RessourceHumaine/'+id)
  }
  // DELETE (delete an existing RH)
  // deleteRH(id: string): Observable<RessourceHumaineAttributes> {
  //   const url = `${ this.apiUrl }/${id}`;
  //   const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cette ressource humaine ?');
  //   if (confirmation) {
  //     return this.http.delete<RessourceHumaineAttributes>(url);
  //   } else {
  //     return '';
  //   }
  // }
}
