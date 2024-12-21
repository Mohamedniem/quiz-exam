import { Component, inject } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { Allsubject } from '../../interfaces/allsubject';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent {

   _SubjectsService=inject(SubjectsService)
  
    allsubjects:Allsubject[]=[]
  
  
    ngOnInit(){
      this.getsubject()
    }
  
    getsubject(){
      this._SubjectsService.allsubject().subscribe({
        next:(res)=>{console.log(res)
          this.allsubjects=res.subjects
          console.log(this.allsubjects);
          
        },
  
      })
    }

}
