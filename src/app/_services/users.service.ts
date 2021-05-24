import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from 'app/_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<User[]> {
    const url = "/api/users";
    return this.http.get<User[]>(url);
  }
}
