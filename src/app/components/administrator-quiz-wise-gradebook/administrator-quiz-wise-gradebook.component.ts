import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCard } from 'src/app/common/score-card';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-administrator-quiz-wise-gradebook',
  templateUrl: './administrator-quiz-wise-gradebook.component.html',
  styleUrls: ['./administrator-quiz-wise-gradebook.component.css']
})
export class AdministratorQuizWiseGradebookComponent implements OnInit {
  scorecards : ScoreCard[]
  percentage : number
  totalmarks : number
  highestmarks : number
  lowestmarks : number
  noOfStudent : number
  averagemarks : number
  constructor(private service : QuizService,
    private route : Router,
    private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getScorecardByPaperid()})
  }
  getScorecardByPaperid(){
    this.totalmarks = 0
    this.highestmarks = 0
    this.lowestmarks = 0
    this.noOfStudent = 0
    const paperid = +this.activateRoute.snapshot.paramMap.get("paperid");
    if(paperid > 0){
      this.service.getScorecardByPaperid(paperid).subscribe(data=>{
        console.log(data);
        this.scorecards = data;
        for(let index in this.scorecards){
          this.totalmarks = this.totalmarks + this.scorecards[index].marks;
          this.lowestmarks = this.scorecards[index].marks;
          this.noOfStudent = this.noOfStudent + 1;
          if(this.highestmarks < this.scorecards[index].marks){
            this.highestmarks = this.scorecards[index].marks;
          }
       }
        this.averagemarks = this.totalmarks / this.noOfStudent;
     
      })
    }
  }
  logout(){
    this.service.setUserLoggedOut();
    this.route.navigateByUrl("");
  }
}
