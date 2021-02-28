import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.APIurl;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer' + sessionStorage.getItem('userSession')});
  }

  getTasks() {
    return this.http.get(`${this.apiUrl}todo`);
  }

  addTsak(requestBody){
    return this.http.post(`${this.apiUrl}todo`, requestBody);
  }

  getTaskById(id: string){
    return this.http.get(`${this.apiUrl}todo/${id}`);
  }

  getTaskUpdate(id: string, requestBody){
    return this.http.put(`${this.apiUrl}todo/${id}`, requestBody);
  }

  deleteTask(id: string){
    return this.http.delete(`${this.apiUrl}todo/${id}`);
  }
}
