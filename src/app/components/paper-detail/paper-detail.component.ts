import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaper } from 'src/app/common/question-paper';
import { ScoreCard } from 'src/app/common/score-card';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.css']
})
export class PaperDetailComponent implements OnInit {
  scorecard : ScoreCard[]
  questionPapers : QuestionPaper[]
  constructor(private service : QuizService,
              private route : Router,
              private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getAllQuiz()})
  }

  getAllQuiz(){
    const category = this.activateRoute.snapshot.paramMap.get("category");
    if(category != null){
       this.service.searchByCategory(category).subscribe(data=>{
       console.log(data);
       this.questionPapers = data;
     })
   }
 }
 isAlreadyAttempt(paperid : number) {
  this.service.getAllScoreCard(paperid, this.service.emailid).subscribe(data=>{
       this.scorecard = data;
       console.log(this.scorecard);
  })
  
}

  attemptQuiz(id : number){
    this.isAlreadyAttempt(id);
    if(this.scorecard.length == 0){
    console.log(id);
    this.route.navigateByUrl("/attemptQuiz/" + id)
    }else{
      this.route.navigateByUrl("/presentscore/" + id);
    }
  }
}
