import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';
import { UsersComponent } from './users/users.component';
import { SurveyComponent } from './survey/survey.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SurveyComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
