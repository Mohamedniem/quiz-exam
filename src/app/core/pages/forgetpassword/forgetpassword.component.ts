import { Component } from '@angular/core';
import { AuthallApiService } from '../../../../../projects/auth-api/src/public-api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {

  constructor(private _AuthallApiService:AuthallApiService , private _Router:Router){}

  forgrtform:FormGroup=new FormGroup({
    email:new FormControl(null ,[Validators.required,Validators.email]),

  })


  getforget(){
    this._AuthallApiService.forgetpassword(this.forgrtform.value).subscribe(
     res => this._Router.navigate(['/verifycode']))
  }

}
