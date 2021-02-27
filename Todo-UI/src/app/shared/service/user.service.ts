import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.APIurl;
  constructor(private http: HttpClient) {
  }

  register(requestBody){
    return this.http.post(`${this.apiUrl}register`, requestBody);
  }

  login(requestBody){
    return this.http.post(`${this.apiUrl}login`, requestBody);
  }
}
