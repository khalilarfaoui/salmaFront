import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface loginForm {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:5000/login';
  private profileApiUrl = 'http://localhost:5000/me';
  constructor(private http: HttpClient) { }
  login(formData: loginForm): Observable<any> {
    console.log(formData);
    return this.http.post<loginForm>(this.apiUrl, formData);
  }
  MeLoggedIn(){
    return this.http.get<any>(this.profileApiUrl)
  }
}
