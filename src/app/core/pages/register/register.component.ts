import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthallApiService } from '../../../../../projects/auth-api/src/public-api';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private _AuthallApiService:AuthallApiService , private _Router:Router){}

  errmessage=''

  registerform:FormGroup=new FormGroup({
    username:new FormControl( null , [Validators.required,Validators.minLength(4),Validators.maxLength(25)]),
    firstName:new FormControl( null , [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    lastName:new FormControl( null , [Validators.required ,Validators.pattern(/^[a-zA-Z]+$/)]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword:new FormControl(null, ),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])

  },this.confirmpassword)


  confirmpassword(g:AbstractControl){
    if (g.get('password')?.value==g.get('rePassword')?.value ){
      return null
    }else{
      return{mismatch:true}
    }
  }


  getregister(){
    
    this._AuthallApiService.register(this.registerform.value).subscribe(
      {
        next:res=>{
          this._Router.navigate(['/login'])
          console.log(res);
         
        },
        error:(err)=>{this.errmessage=err.error.message}

      }
    )

  }

}
