import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './module/register/register.component';
import { LoginComponent } from './module/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/service/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {LoginReducers} from './module/login/reducers/reducers';
import {TodoService} from './shared/service/todo.service';
import {BasicAuthInterceptor} from './shared/service/basic-auth.interceptor';
import {reducer} from './shared/reducers/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      task: reducer
    }),
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    TodoService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
