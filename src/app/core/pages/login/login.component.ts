import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthallApiService } from '../../../../../projects/auth-api/src/public-api';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthallApiService:AuthallApiService, private _Router:Router){}

  loginform:FormGroup=new FormGroup({
    email:new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/) ]),
  })


  getlogin(){
    this._AuthallApiService.login(this.loginform.value).subscribe({
      next:res =>{
        console.log(res)
        this._Router.navigate(['/mainhome'])
        if (res.message=='success'){
          localStorage.setItem('usertoken',res.token)
      }

      }

    })
  }



}
