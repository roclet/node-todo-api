import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {TaskModel} from '../../../shared/model/task';
import {AppState} from '../../../app.state';
import {TodoService} from "../../../shared/service/todo.service";

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
    private taskervice: TodoService
    ) {
    this.tasks = store.select('task');
    console.log('this.tasks', this.tasks);
    this.getTasks();
  }

  ngOnInit(): void {}
  getTasks() {
    this.taskervice.getTasks().subscribe((data) => {
      console.log('data xxxx', data);
      this.tasks1 = data;
    });
  }
}
