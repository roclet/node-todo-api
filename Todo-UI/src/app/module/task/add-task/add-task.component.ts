import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import {TaskModel, TaskPostModel} from '../../../shared/model/task';
import {UUID} from 'angular2-uuid';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from "../../../shared/service/todo.service";

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
    private taskervice: TodoService
  ) {
    this.route.queryParams.subscribe(params => {
      this.Id = params['ID'];
      console.log('this.Id', this.Id);
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
    this.taskervice.addTsak(this.taskModel)
      .subscribe((data) => {
        if (data) {
          alert('Successfully add task');
          this.router.navigate(['/mqtask/list']);
        }
      });
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
