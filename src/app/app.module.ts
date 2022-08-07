import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AttemptQuizComponent } from './components/attempt-quiz/attempt-quiz.component';
import { PaperDetailComponent } from './components/paper-detail/paper-detail.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';
import { GradebookCategoryComponent } from './components/gradebook-category/gradebook-category.component';
import { OverallgradebookComponent } from './components/overallgradebook/overallgradebook.component';
import { AdministratorQuizComponent } from './components/administrator-quiz/administrator-quiz.component';
import { AdministratorQuizWiseGradebookComponent } from './components/administrator-quiz-wise-gradebook/administrator-quiz-wise-gradebook.component';
import { AdministratorViewStudentComponent } from './components/administrator-view-student/administrator-view-student.component';
import { PresentScoreComponent } from './components/present-score/present-score.component';
import { AuthguardGuard } from './authguard.guard';

const routes : Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'student',  canActivate:[AuthguardGuard], component: StudentComponent},
  {path: 'administrator', canActivate:[AuthguardGuard], component: AdministratorComponent},
  {path: 'administratorQuiz/:category', canActivate:[AuthguardGuard], component: AdministratorQuizComponent},
  {path: 'administratorViewStudent',canActivate:[AuthguardGuard],  component: AdministratorViewStudentComponent},
  {path: 'administratorGradebook/:paperid',canActivate:[AuthguardGuard],  component: AdministratorQuizWiseGradebookComponent},
  {path: 'attemptQuiz/:id', canActivate:[AuthguardGuard], component: AttemptQuizComponent},
  {path: 'paperdetail/:category',canActivate:[AuthguardGuard],  component: PaperDetailComponent},
  {path: 'gradebookcategory',canActivate:[AuthguardGuard],  component: GradebookCategoryComponent},
  {path: 'gradebook/:subcategory', canActivate:[AuthguardGuard], component: GradebookComponent},
  {path: 'overallgradebook',canActivate:[AuthguardGuard],  component: OverallgradebookComponent},
  {path: 'presentscore/:paperid',canActivate:[AuthguardGuard],  component: PresentScoreComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    AdministratorComponent,
    AttemptQuizComponent,
    PaperDetailComponent,
    GradebookComponent,
    GradebookCategoryComponent,
    OverallgradebookComponent,
    AdministratorQuizComponent,
    AdministratorQuizWiseGradebookComponent,
    AdministratorViewStudentComponent,
    PresentScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
