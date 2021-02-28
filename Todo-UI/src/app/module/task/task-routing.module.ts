import { Routes, RouterModule } from '@angular/router';
import {ViewTaskComponent} from './view-task/view-task.component';
import {NgModule} from '@angular/core';
import {AddTaskComponent} from './add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ViewTaskComponent
  },
  {
    path: 'add',
    component: AddTaskComponent,
    data: {
      hideSidebar: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
