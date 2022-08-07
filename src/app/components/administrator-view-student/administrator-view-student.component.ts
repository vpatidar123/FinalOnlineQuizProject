import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-administrator-view-student',
  templateUrl: './administrator-view-student.component.html',
  styleUrls: ['./administrator-view-student.component.css']
})
export class AdministratorViewStudentComponent implements OnInit {
  students : User[]
  constructor(private service : QuizService,
    private route : Router,
    private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(){
    this.service.getUserByRole('student').subscribe(data=>{
      this.students = data;
    })
  }
  getOverallGradebook(emailid : String){
    this.service.emailid = emailid;
    this.route.navigateByUrl("/overallgradebook")
  } 
}
