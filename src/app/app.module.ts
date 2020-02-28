import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { QuestionService } from '@services/question.service';
import { UserService } from '@services/user.service';
import { SurveyService } from '@services/survey.service';

import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { SurveyComponent } from './survey/survey.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuestionsModule,
    UsersModule
  ],
  providers: [
    QuestionService,
    UserService,
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
