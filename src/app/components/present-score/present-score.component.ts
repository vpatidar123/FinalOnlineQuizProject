import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCard } from 'src/app/common/score-card';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-present-score',
  templateUrl: './present-score.component.html',
  styleUrls: ['./present-score.component.css']
})
export class PresentScoreComponent implements OnInit {
  scoreCards : ScoreCard[]
  constructor(private service : QuizService,
              private route : Router,
              private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getScoreCard()})
  }
  getScoreCard(){
    const paperid = +this.activateRoute.snapshot.paramMap.get("paperid");
    if(paperid > 0){
       this.service.getAllScoreCard(paperid, this.service.emailid).subscribe(data=>{
       console.log(data);
       this.scoreCards = data;
     })
   }
  }
  logout(){
    this.service.setUserLoggedOut();
    this.route.navigateByUrl("");
  }
  home(){
    
    this.route.navigateByUrl("student");
  }
}
