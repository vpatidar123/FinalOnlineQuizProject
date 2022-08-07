import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaper } from 'src/app/common/question-paper';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-gradebook-category',
  templateUrl: './gradebook-category.component.html',
  styleUrls: ['./gradebook-category.component.css']
})
export class GradebookCategoryComponent implements OnInit {

  questionPapers : QuestionPaper[]
  constructor(private service : QuizService,
              private route : Router,
              private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuestionPaper();
  }
  getAllQuestionPaper(){
    this.service.searchByCategory('Technical').subscribe(data=>{
      this.questionPapers = data;
    })
  }
  getGradebook(subcategory : String){
    this.route.navigateByUrl("/gradebook/" + subcategory)
  }
  
}
