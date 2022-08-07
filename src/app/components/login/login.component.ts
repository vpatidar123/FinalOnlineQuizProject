import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users : User[]
  message : String;
  match : Boolean;
  constructor(private service : QuizService,
               private route : Router   ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
   
  loginSubmit2(loginForm :any){
     this.match = false;
    for(let user of this.users)
    {
      if(loginForm.email === user.emailid && loginForm.password === user.password){
        this.service.setUserLoggedIn();
        this.match = true;
        this.service.emailid = user.emailid;
        console.log(this.service.emailid)
         if(user.role == "student"){
          this.route.navigateByUrl("student");
         }
         else{
          this.route.navigateByUrl("administrator");
         }
      }
    }
    if(this.match == false){
      this.message = "Invalid credential";
      this.route.navigateByUrl("login")
    }
    


  }
  getAllUsers(){
    this.service.getAllUsers().subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }
}
