import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import {TaskModel, TaskPostModel} from '../../../shared/model/task';
import {UUID} from 'angular2-uuid';
import {Router} from '@angular/router';
import {TodoService} from "../../../shared/service/todo.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskModel = new TaskPostModel();
  constructor(
    private router: Router,
    private taskervice: TodoService
  ) { }

  ngOnInit(): void {
  }

  addtask(){
    this.taskModel.id = UUID.UUID().toString();
    this.taskModel.completed = true;
    console.log('task', this.taskModel);
    // this.taskervice
    this.taskervice.addTsak(this.taskModel)
      .subscribe((data) => {
        if (data) {
          console.log('data %%%%', data);
          alert('Successfully add task');
          this.router.navigate(['/mqtask/list']);
        }
      });
  }

}
