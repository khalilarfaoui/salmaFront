import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  private apiUrl = 'http://localhost:5000/intervention';
  constructor(private http: HttpClient) { }

  postIntervention(data:any){
    return this.http.post(this.apiUrl , data)
  }
  getIntervention(){
    return this.http.get(this.apiUrl)
  }

  addMat(data : any){
    return this.http.post('http://localhost:5000/Intermat' , data)
  }
}
