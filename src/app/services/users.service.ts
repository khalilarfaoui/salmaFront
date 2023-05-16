import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:5000/users'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  // READ (get all users)
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // READ (get a single user)
  getUserById(id: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  // CREATE (add a new user)
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // UPDATE (update an existing user)
  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.uuid}`;
    return this.http.patch<User>(url, user);
  }

  // DELETE (delete an existing user)
  deleteUser(id: string): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');
    if (confirmation) {
      return this.http.delete<User>(url);
    } else {
      return this.http.delete<User>(url);
    }
  } 
  
}