import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import {UserModel} from "../../shared/model/user.model";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword: boolean ;
  showVerifyPassword: boolean ;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(55)]],
      password: ['', [Validators.required,  Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(60)]],
      preferredComm: ['', [Validators.required]]
    });
  }

  register(){
    const userModel = new UserModel();
    userModel.name = this.registerForm.value.name;
    userModel.email = this.registerForm.value.email;
    userModel.password = this.registerForm.value.password;
    userModel.id = 'asasdsdadewewqq1222';
    console.log('userModel xxxxxxxxxxxxxxxxxxxxxxx', userModel);
  }
  // createUserProfile(){
  //     this.authService.otpForOpsLogin({ username: this.loginFormWithUsername.value.username, password: this.loginFormWithUsername.value.password, preferredComm: this.loginFormWithUsername.value.preferredComm })
  //       .subscribe((data) => {
  //         if (data['status'] == "Success") {
  //           this.messageService.add({ sticky: true, severity: 'success', summary: 'OTP', detail: 'OTP Sent successfully' });
  //           this.activeIndex = 2;
  //         }
  //         else {
  //           this.messageService.add({ sticky: true, severity: 'error', summary: 'OTP Failed', detail: data['message'] });
  //         }
  //       });
  // }
  // createUserProfile(){}
  // sendOTP() {
  //   this.authService.otpForOpsLogin({ username: this.loginFormWithUsername.value.username, password: this.loginFormWithUsername.value.password, preferredComm: this.loginFormWithUsername.value.preferredComm })
  //     .subscribe((data) => {
  //       if (data['status'] == "Success") {
  //         this.messageService.add({ sticky: true, severity: 'success', summary: 'OTP', detail: 'OTP Sent successfully' });
  //         this.activeIndex = 2;
  //       }
  //       else {
  //         this.messageService.add({ sticky: true, severity: 'error', summary: 'OTP Failed', detail: data['message'] });
  //       }
  //     });
  // }
}
