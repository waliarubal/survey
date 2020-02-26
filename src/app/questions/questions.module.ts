import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
    declarations: [
        QuestionComponent,
        QuestionsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [QuestionsComponent]
})
export class QuestionsModule {

}