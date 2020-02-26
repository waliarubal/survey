import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';
import { SurveyComponent } from './survey/survey.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    UsersComponent,
    SurveyComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
