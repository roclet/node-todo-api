import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppState, getAllItems, getTaskState} from "../../module/task/reducers";
import {Store} from "@ngrx/store";
import * as TaskActions from "../../module/task/action/tasks.action";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.APIurl;
  headers: HttpHeaders;
  constructor(private store: Store<AppState>, private http: HttpClient) {
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
  load() {
    this.store.dispatch(new TaskActions.LoadTaskBegin());
  }
  getData() {
    return this.store.select(getTaskState);
  }

  getItems() {
    return this.store.select(getAllItems);
  }
}
