import { Component } from '@angular/core';
import { AuthallApiService } from '../../../../../projects/auth-api/src/public-api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-setpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './setpassword.component.html',
  styleUrl: './setpassword.component.css'
})
export class SetpasswordComponent {


  constructor(private _AuthallApiService:AuthallApiService , private _Router:Router){}

  setpasswordform:FormGroup=new FormGroup({


    email:new FormControl(null , [Validators.required ,Validators.email]),
    newPassword:new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/) ]),
  })


  getsetpassword(){
    this._AuthallApiService.resetpassword(this.setpasswordform.value).subscribe(
     res =>this._Router.navigate(['/login']) )
  }


}
