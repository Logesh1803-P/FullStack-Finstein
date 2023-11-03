import { Component } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
   
  students:any = ''
  constructor(private service : StudentService){}
 
    ngOnInit(): void {

      this.service.getAllstudent().subscribe((data)=>{
      this.students = data
  
      })
  }

}
