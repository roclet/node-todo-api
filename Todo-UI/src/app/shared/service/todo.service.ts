import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.APIurl;
  headers: HttpHeaders;
  constructor() {
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer' + sessionStorage.getItem('userSession')});
  }
}
