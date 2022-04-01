import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  
  student : Student[] =[];

  constructor(private server:StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    this.server.getAllStudent().subscribe(
      data =>{this.student=data},
      error =>
      {
        this.student=[];
        console.log(error)
      }
    );
  }


}
