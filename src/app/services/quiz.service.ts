import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuestionPaper } from '../common/question-paper';
import { Questions } from '../common/questions';
import { ScoreCard } from '../common/score-card';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  isUserLoggedIn = false;
  emailid : String;
  private scoreCardUrl = "http://localhost:8081/api/scorecard"
  private questionPaperUrl = "http://localhost:8081/api/questionPaper"
  private questionsUrl = "http://localhost:8081/api/questions"
  private userUrl = "http://localhost:8081/api/user"

  constructor(private httpClient : HttpClient) { }

  getUserStatus(){
    return this.isUserLoggedIn;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }
  saveScoreCard(scorecard : ScoreCard) : Observable<ScoreCard>{
    console.log(scorecard);
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    }
    return this.httpClient.post<ScoreCard>(this.scoreCardUrl,scorecard,httpOptions);
  }
  saveUser(user : User) : Observable<User>{
    console.log(user)

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    }
    return this.httpClient.post<User>(this.userUrl,user,httpOptions);
  }
  getScorecardByPaperid(paperid : number):  Observable<ScoreCard[]>{
    return this.httpClient.get<getScoreCardResponse>(this.scoreCardUrl + "/search/findByPaperid?paperid="  + paperid).pipe(map(response=>response._embedded.scoreCards));
  }
  getUserByRole(role : String){
    return this.httpClient.get<getUserResponse>(this.userUrl + "/search/findUserByRole?role=" + role).pipe(map(response=>response._embedded.users));
  }
  getAllUsers() : Observable<User[]>{
    console.log(this.httpClient.get<getUserResponse>(this.userUrl).pipe(map(response=>response._embedded.users)));
    return this.httpClient.get<getUserResponse>(this.userUrl).pipe(map(response=>response._embedded.users));
  }
  getUser(emailid : String){
    return this.httpClient.get<getUserResponse>(this.userUrl + "/search/findUserByEmailid?emailid=" + emailid).pipe(map(response=>response._embedded.users));
  }
  searchByCategory(category : String) : Observable<QuestionPaper[]>{
    
    return this.httpClient.get<getQuestionPaperResponse>(this.questionPaperUrl +'/search/findByCategoryContainsAllIgnoreCase?category=' + category ).pipe(map(response=>response._embedded.questionPapers));
  }
  getQuestionPaperByPaperid(paperid : number){
    return this.httpClient.get<getQuestionPaperResponse>(this.questionPaperUrl +'/search/findByPaperid?paperid=' + paperid ).pipe(map(response=>response._embedded.questionPapers));
  }
  searchByPaperid(paperid : number): Observable<Questions[]>{
   
    return this.httpClient.get<getQuestionResponse>(this.questionsUrl +'/search/findBypaperid?paperid=' + paperid ).pipe(map(response=>response._embedded.questionses));
  }
  searchBySubCategory(subcategory : String) : Observable<QuestionPaper[]>{
    
    return this.httpClient.get<getQuestionPaperResponse>(this.questionPaperUrl +'/search/findBySubcategoryContainsAllIgnoreCase?subcategory=' + subcategory ).pipe(map(response=>response._embedded.questionPapers));
  }
  getAllScoreCard(paperid : number, emailid : String) : Observable<ScoreCard[]>{
    console.log(this.httpClient.get<getScoreCardResponse>(this.scoreCardUrl+ "/search/findByPaperidAndEmailId?paperid=" + paperid +"&emailid=" + emailid).pipe(map(response=>response._embedded.scoreCards)));
    return this.httpClient.get<getScoreCardResponse>(this.scoreCardUrl + "/search/findByPaperidAndEmailId?paperid=" + paperid +"&emailid=" + emailid).pipe(map(response=>response._embedded.scoreCards));
  }
  getAllScoreCardsByEmailid() : Observable<ScoreCard[]>{
    console.log(this.httpClient.get<getScoreCardResponse>(this.scoreCardUrl+ "/search/findByEmailidContainsAllIgnoreCase?emailid=" + this.emailid).pipe(map(response=>response._embedded.scoreCards)));
    return this.httpClient.get<getScoreCardResponse>(this.scoreCardUrl + "/search/findByEmailidContainsAllIgnoreCase?emailid="  + this.emailid).pipe(map(response=>response._embedded.scoreCards));
  }
  getScoreCardsByQuizname(quizname : String){
    return this.httpClient.get<getScoreCardResponse>("http://localhost:8081/api/scorecard/search/findByEmailidAndQuiznameContainsAllIgnoreCase?emailid=" + this.emailid + "&" + "quizname=" + quizname).pipe(map(response=>response._embedded.scoreCards));
  }
}

interface getUserResponse{
  _embedded:{
    users : User[]
  }
}
interface getQuestionPaperResponse{
  _embedded:{
    questionPapers : QuestionPaper[]
  }
}
interface getQuestionResponse{
  _embedded:{
    questionses : Questions[]
  }
}
interface getScoreCardResponse{
  _embedded:{
    scoreCards : ScoreCard[]
  }
}