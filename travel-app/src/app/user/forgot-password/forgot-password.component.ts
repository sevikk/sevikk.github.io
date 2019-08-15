import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotForm: FormGroup;
  isLoading = false;
  responseMessage: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      email: new FormControl('', Validators.required)
    })
  }

  sendEmailForRestorePass() {
    this.isLoading = true;
    const payload = {
      email: this.forgotForm.value.email
    }
    this.authService.sendEmailForRestorePass(payload)
      .subscribe(
        (response: any) => {
          this.isLoading = false;
          this.responseMessage = response.message;
        },
        error => {
        })
  }

}
