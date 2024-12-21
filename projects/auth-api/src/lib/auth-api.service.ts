import { Injectable } from '@angular/core';
import { authAPI } from './base/authAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { authendpoints } from './enums/auth-api';
import { AuthapiService } from './adapter/authapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthallApiService implements authAPI {

  constructor(private _HttpClient:HttpClient ,private _AuthapiService:AuthapiService) { }
   login(data: any): Observable<any> {
    return this._HttpClient.post(authendpoints.login, data)
    // .pipe(
    //   map(res=>this._AuthapiService.adapt(res)),
    // catchError(err=>of(err)));
  }
   register(data: any): Observable<any> {
    return this._HttpClient.post(authendpoints.register, data);
  }
   logout(): Observable<any> {
    return this._HttpClient.get(authendpoints.logout);
  }
  forgetpassword(data:any): Observable<any>{
    return this._HttpClient.post(authendpoints.forgetpassword,data)
  }
  verifycode(data:any):Observable<any>{
    return this._HttpClient.post(authendpoints.verifycode,data)
  }
  resetpassword(data:any):Observable<any>{
    return this._HttpClient.put(authendpoints.resetpassword,data)
  }

}
