import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import {UserModel} from '../../shared/model/user.model';
import {UserService} from '../../shared/service/user.service';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword: boolean ;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(55)]],
      password: ['', [Validators.required,  Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(60)]],
    });
  }

  register(){
    const userModel = new UserModel();
    userModel.name = this.registerForm.value.name;
    userModel.email = this.registerForm.value.email;
    userModel.password = this.registerForm.value.password;
    userModel.id = UUID.UUID().toString();
    this.userService.register(userModel)
          .subscribe((data) => {
            if (data) {
              alert('Successfully registered');
            }
    });
  }
}
