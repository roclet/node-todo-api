import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import {RegisterComponent} from './module/register/register.component';
import {AuthGuard} from "./shared/service/auth-gaurd";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      isLogin: false
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mqtask',
    loadChildren: () => import('./module/task/task.module').then(m => m.TaskModule),
    data: {
      isLogin: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
