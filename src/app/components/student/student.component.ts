import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuestionPaper } from 'src/app/common/question-paper';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  
  constructor(private service : QuizService,
              private route : Router ) {}

  ngOnInit(): void {
  }

  getAllQuiz(category : String){
    this.route.navigateByUrl("/paperdetail/" + category)
  } 
  getGradebookCategory(){
    this.route.navigateByUrl("/gradebookcategory")
  } 
  getOverAllGradebook(){
    this.route.navigateByUrl("/overallgradebook")
  } 
  getGradebook(subcategory : String){
    this.route.navigateByUrl("/gradebook/" + subcategory)
  }
  logout(){
    this.service.setUserLoggedOut();
    this.route.navigateByUrl("");
  }
}
