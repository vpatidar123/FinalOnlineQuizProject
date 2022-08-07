import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaper } from 'src/app/common/question-paper';
import { Questions } from 'src/app/common/questions';
import { ScoreCard } from 'src/app/common/score-card';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {
  questions : Questions[]
  paperid : number
  count : number = 0;
  anslist : number[] = [0,0,0,0,0,0,0,0,0,0]
  ans : String[] = ["","","","","","","","","",""]
  questionPaper : QuestionPaper[]
  tempScorecard : ScoreCard[]
  scorecard : ScoreCard = new ScoreCard(0,6,this.service.emailid,0,"java1",0,"08/08/2022")
  constructor(private service : QuizService,
              private route : Router,
              private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getAllQuestions()})
  }
  onSubmit(correctoption : String, questionno : number){
    console.log("questionno" + questionno)
    console.log("anslist" + this.anslist);
    console.log("correctoption" +correctoption);
    console.log("ans" +this.ans);
     if(this.anslist[questionno - 1] == 0 && correctoption == this.ans[questionno - 1]){
        this.count++;
        this.anslist[questionno - 1] = 1;
        console.log(this.count);
     }else if(this.anslist[questionno - 1] == 1 && correctoption != this.ans[questionno - 1]){
      this.count--;
      this.anslist[questionno - 1] = 0;
      console.log(this.count);
   }
    
  }
  onFinish(){
    this.service.getQuestionPaperByPaperid(this.paperid).subscribe(data=>{
      this.questionPaper = data;
      for(let index in this.questionPaper){
        this.scorecard.totalmarks = this.questionPaper[index].totalmarks;
        this.scorecard.marks = (this.questionPaper[index].totalmarks / this.questions.length) * this.count;
        this.scorecard.quizname = this.questionPaper[index].quizname;
        this.scorecard.paperid = this.questionPaper[index].paperid;
      }
      this.service.saveScoreCard(this.scorecard).subscribe(data=>{
        this.route.navigateByUrl("/presentscore/" + this.paperid);
      })
    }) 
  }
  
  getAllQuestions(){
     this.paperid = +this.activateRoute.snapshot.paramMap.get("id");
     
    if(this.paperid > 0){
    
        this.service.searchByPaperid(this.paperid).subscribe(data=>{
        console.log(data);
        this.questions = data;
       
      })
    }
  
  }
}
