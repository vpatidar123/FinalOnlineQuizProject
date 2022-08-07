import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private service : QuizService,
    private route : Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.route.navigateByUrl("");
  }
  getStudents(){
    this.route.navigateByUrl("administratorViewStudent")
  }
  getQuiz(category : String){
    this.route.navigateByUrl("/administratorQuiz/" + category)
  }
}
