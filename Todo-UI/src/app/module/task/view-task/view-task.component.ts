import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {TaskModel} from '../../../shared/model/task';
import {AppState} from '../../../app.state';
import {TodoService} from "../../../shared/service/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  tasks: Observable<TaskModel[]>;
  tasks1: any;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private taskervice: TodoService
    ) {
    this.tasks = store.select('task');
    this.getTasks();
  }

  ngOnInit(): void {}
  getTasks() {
    this.taskervice.getTasks().subscribe((data) => {
      this.tasks1 = data;
    });
  }

  addTask(){
    this.router.navigate(['/mqtask/add']);
  }

  editTask(id: string){
    this.router.navigate(['/mqtask/add'], { queryParams: { ID: id } });
  }

  deleteTask(id: string){
    const idNumber: string = id.toString();
    this.taskervice.deleteTask(idNumber).subscribe((data) => {
      console.log('data zzzz', data);
      this.getTasks();
    });
  }
}
