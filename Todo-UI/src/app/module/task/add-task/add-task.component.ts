import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import {TaskModel, TaskPostModel} from '../../../shared/model/task';
import {UUID} from 'angular2-uuid';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from "../../../shared/service/todo.service";
import {Store} from "@ngrx/store";
import {AppState} from '../../../app.state';
import {Observable} from "rxjs";
import {AddTaskAction, DeleteItemAction} from "../action/tasks.action";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskModel = new TaskPostModel();
  Id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private taskervice: TodoService
  ) {
    this.route.queryParams.subscribe(params => {
      this.Id = params['ID'];
      if (this.Id){
        this.getTaskById();
      }
    });
  }

  ngOnInit(): void {
  }

  getTaskById(){
    this.taskervice.getTaskById(this.Id).subscribe((data) => {
      this.taskModel.task = data['task'];
    });
  }

  addTaskAndEdit(){
    if (this.Id){
      this.updateTask();
    }else {
      this.addtask();
    }
  }

  addtask(){
    this.taskModel.id = UUID.UUID().toString();
    this.taskModel.completed = true;
    this.store.dispatch(new AddTaskAction(this.taskModel));
    alert('Successfully add task');
    this.router.navigate(['/mqtask/list']);
  }

  updateTask(){
    this.taskervice.getTaskUpdate(this.Id, this.taskModel)
      .subscribe((data) => {
        if (data) {
          alert('Successfully update task');
          this.router.navigate(['/mqtask/list']);
        }
      });
  }

}
