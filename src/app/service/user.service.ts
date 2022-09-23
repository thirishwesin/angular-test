import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/users';
@Injectable({
  providedIn: 'root'
})

export class UserService {

 constructor(private http:HttpClient) {}
 getAllUser(): Observable<any> {
  return this.http.get(baseUrl);
}

createUser(data:any): Observable<any> {
  return this.http.post(baseUrl, data);
}
}
