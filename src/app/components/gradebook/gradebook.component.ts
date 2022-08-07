import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaper } from 'src/app/common/question-paper';
import { ScoreCard } from 'src/app/common/score-card';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  flag : boolean;
  questionPapers : QuestionPaper[]
  scorecards : ScoreCard[]
  gradebooks : ScoreCard[]
  percentage : number
  marks : number
  totalmarks : number
  constructor(private service : QuizService,
    private route : Router,
    private activateRoute : ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getAllScorecards()})
    
  }
  getAllScorecards(){
    this.marks=0
    this.totalmarks=0
    const subcategory = this.activateRoute.snapshot.paramMap.get("subcategory");
    if(subcategory != null){
      this.service.getScoreCardsByQuizname(subcategory).subscribe(data=>{
        this.scorecards = data;
        for(let index in this.scorecards){
           this.marks = this.marks + this.scorecards[index].marks;
           this.totalmarks = this.totalmarks + this.scorecards[index].totalmarks;
        }
         this.percentage = this.marks / this.totalmarks * 100;
      })
    }
  }
  // getAllQuestionPaper(){
  //   const subcategory = this.activateRoute.snapshot.paramMap.get("subcategory");
  //   if(subcategory != null){
      
  //     this.service.searchBySubCategory(subcategory).subscribe(data=>{
        
  //       this.questionPapers = data;
  //       console.log(this.questionPapers);
  //       for(let index in this.questionPapers){
  //         this.service.getAllScoreCard(this.questionPapers[index].paperid, this.service.emailid).subscribe(data=>{
  //           this.scorecards = data;
  //           console.log(this.scorecards)
  //           this.flag = true;
  //           console.log(this.flag);
            
  //         })
  //         if(this.flag == true)
  //       {  console.log(this.scorecards)
        
  //         for(let index in this.scorecards){
  //           console.log(this.scorecards[index])
  //           this.gradebooks.push(this.scorecards[index]);
  //           console.log(this.gradebooks);
  //         }
  //       }
  //       }
  //     })
      
  //   }
    
  // }
 
  logout(){
    this.service.setUserLoggedOut();
    this.route.navigateByUrl("");
  }
}
