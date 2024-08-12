import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string = '';

  constructor(private usersService: UsersService, private router: Router){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }
  
  onSubmit() {
    const FormData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.usersService.login(FormData.email, FormData.password).subscribe({
      next : (resData: any) => {
        localStorage.setItem('token', resData.token);
        localStorage.setItem('accessToken', resData.refreshToken);
        this.router.navigate(['/dashboard']);
      },
      error : (error) => {
        this.error = error.message;
      }
    })
  }
}
