import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCard } from 'src/app/common/score-card';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-overallgradebook',
  templateUrl: './overallgradebook.component.html',
  styleUrls: ['./overallgradebook.component.css']
})
export class OverallgradebookComponent implements OnInit {
 scorecards : ScoreCard[]
 percentage : number
 marks : number
 totalmarks : number
  constructor(private service : QuizService,
    private route : Router,
    private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllScoreCards();
  }
  getAllScoreCards(){
    this.marks=0
    this.totalmarks=0
    this.percentage=0
    this.service.getAllScoreCardsByEmailid().subscribe(data=>{
      this.scorecards =data;
      for(let index in this.scorecards){
        this.marks = this.marks + this.scorecards[index].marks;
        this.totalmarks = this.totalmarks + this.scorecards[index].totalmarks;
     }
      this.percentage = this.marks / this.totalmarks * 100;
  })
 }
 logout(){
  this.service.setUserLoggedOut();
  this.route.navigateByUrl("");
}
}
