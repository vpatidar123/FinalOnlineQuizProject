import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message : String ;
  users : User[]
  
  currentuser : User = new User("","","","role")
  constructor(private service : QuizService,
              private route : Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  isNewUser() : Boolean{
    for(let index in this.users){
      if(this.users[index].emailid == this.currentuser.emailid){
        this.message = "Emailid already exists";
        return false;
      }
    }
    return true;
  }
  signUp(){
    if(this.isNewUser()){
      this.service.saveUser(this.currentuser).subscribe(data =>{
        console.log(this.currentuser)
        alert("Signup Successful")
        this.route.navigateByUrl("")
       })
   }
  }
  getAllUsers(){
    this.service.getAllUsers().subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }
}
