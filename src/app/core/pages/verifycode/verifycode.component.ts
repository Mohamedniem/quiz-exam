import { Component } from '@angular/core';
import { AuthallApiService } from '../../../../../projects/auth-api/src/public-api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifycode',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './verifycode.component.html',
  styleUrl: './verifycode.component.css'
})
export class VerifycodeComponent {


  constructor(private _AuthallApiService:AuthallApiService ,private _Router:Router){}

  verifyform:FormGroup=new FormGroup({
    resetCode:new FormControl(null ,[Validators.required]),

  })


  verify(){
    this._AuthallApiService.verifycode(this.verifyform.value).subscribe(
     res => this._Router.navigate(['/resetpassword']))
  }

}
