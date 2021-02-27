import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {Store} from '@ngrx/store';
import {UserModel} from '../../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean ;
  constructor(private formBuilder: FormBuilder,
              // private store: Store<AuthModel>,
              private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required,  Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(60)]]
    });
  }

  login(){
    const userModel = new UserModel();
    userModel.email = this.loginForm.value.email;
    userModel.password = this.loginForm.value.password;
    console.log('userModel xxxxxxxxxxxxxxxxxxxxxxx', userModel);
    this.userService.login({ email: this.loginForm.value.email, password: this.loginForm.value.password})
      .subscribe((data) => {
        console.log('data ***', data);
        // if (data['status'] == "Success") {
        //   this.messageService.add({ sticky: true, severity: 'success', summary: 'OTP', detail: 'OTP Sent successfully' });
        //   this.activeIndex = 2;
        // }
        // else {
        //   this.messageService.add({ sticky: true, severity: 'error', summary: 'OTP Failed', detail: data['message'] });
        // }
      });
  }
}

