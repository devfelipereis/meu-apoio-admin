import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from 'app/_interfaces/user';
import { UserCreate } from 'app/pages/users/_components/user-create/user-create.interface';
import { UserUpdate } from 'app/pages/users/_components/user-update/user-update.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<User[]> {
    const url = "/api/users";
    return this.http.get<User[]>(url);
  }

  store(data: UserCreate): Observable<User> {
    const url = '/api/users';
    return this.http.post<User>(url, data);
  }

  update(id: number, data: UserUpdate): Observable<User> {
    const url = `/api/users/${id}`;
    console.log('update', data)
    return this.http.patch<User>(url, data);
  }

  remove(id: number): Observable<User> {
    const url = `/api/users/${id}`;
    return this.http.delete<User>(url);
  }
}
