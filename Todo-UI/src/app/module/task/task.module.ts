import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {TaskRoutingModule} from './task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {metaReducers, reducers} from "./reducers";
// import {effects} from "./effects";
// import {EffectsModule} from "@ngrx/effects";
// import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
  AddTaskComponent,
  ViewTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // EffectsModule.forRoot(effects)
  ]
})
export class TaskModule { }
