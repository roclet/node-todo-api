import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.APIurl;
  loginAs$ = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
  }

  register(requestBody){
    return this.http.post(`${this.apiUrl}register`, requestBody);
  }

  login(requestBody){
    return this.http.post(`${this.apiUrl}login`, requestBody);
  }

  loginAs(isloin: boolean){
    this.loginAs$.next(isloin);
  }
}
