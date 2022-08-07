import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaper } from 'src/app/common/question-paper';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-administrator-quiz',
  templateUrl: './administrator-quiz.component.html',
  styleUrls: ['./administrator-quiz.component.css']
})
export class AdministratorQuizComponent implements OnInit {
  questionPapers : QuestionPaper[]
  constructor(private service : QuizService,
    private route : Router,
    private activateRoute : ActivatedRoute,) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getQuiz()})
  }
  getQuiz(){
    const category = this.activateRoute.snapshot.paramMap.get("category");
    if(category != null){
       this.service.searchByCategory(category).subscribe(data=>{
       console.log(data);
       this.questionPapers = data;
     })
   }
  }
  getScorecardsByQuiz(paperid : number){
      this.route.navigateByUrl("/administratorGradebook/" + paperid)
  }
}
