import { Injectable } from '@angular/core';
import { Adapt } from '../interface/adapt';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService implements Adapt {

  constructor() { }


  adapt(data:any){
    return data.results;
  }
}
