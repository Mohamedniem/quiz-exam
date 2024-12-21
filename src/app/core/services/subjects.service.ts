import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  _HttpClient=inject(HttpClient)


  allsubject():Observable<any>{
    return this._HttpClient.get("https://exam.elevateegy.com/api/v1/subjects")
  }


  allexams():Observable<any>{
    return this._HttpClient.get("https://exam.elevateegy.com/api/v1/exams")
  }


  questions(id:string):Observable<any>{
    return this._HttpClient.get(`https://exam.elevateegy.com/api/v1/questions?exam=${id}`)
  }
}
