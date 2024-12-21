import { Component, inject } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { Allexams } from '../../interfaces/allexams';
import { CountdownComponent } from 'ngx-countdown';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';


@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [CountdownComponent ,CommonModule ,NgCircleProgressModule ,  ],
  templateUrl: './exam-page.component.html',

  styleUrl: './exam-page.component.css'
})
export class ExamPageComponent {

  _SubjectsService=inject(SubjectsService)



  allexams:Allexams[]=[]
  allexamid:any=''
  allquestions:any[]=[]
  n:number=0
  allcorrect:any[]=[]
  countplus:number=0
  correctkey:string=''




  ngOnInit(){
   this.getallexams()
   this.getquestions()
  }

  getallexams(){
    this._SubjectsService.allexams().subscribe({
      next: (data) => {console.log(data)
        this.allexams=data.exams
        this.allexamid=data.exams._id

        console.log(this.allexams);


      },
      error: (error) => {console.error(error)}
    })
  }

  getquestions(){
    this._SubjectsService.questions(this.allexamid).subscribe({
      next:(res)=>{
        console.log(res.questions);
        this.allquestions=res.questions
        this.allcorrect=this.allquestions.map(question => question.correct);
        console.log(this.allcorrect);

      }
    })
  }

  nplus(){
    if (this.n<=this.allquestions.length-1) {
      this.n=this.n+1
    }else{
      this.n=0
    }
  }

  nminus(){
    if (this.n >=0) {
      this.n=this.n-1

    }else{
      this.n=0
    }
  }

  selectoption(item:any){
    if(item==this.allcorrect[this.n]){
      this.countplus++

    }
    console.log(this.countplus);
    // console.log(item);
    console.log(this.allcorrect[this.n]);
  }
}
