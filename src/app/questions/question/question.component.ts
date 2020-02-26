import { Component, Input } from '@angular/core';
import { Question } from '@models/question.model';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    @Input() Question: Question;
    
    IsTitleEditorVisible: boolean;
    IsTextEditorVisible: boolean;

    constructor(){
        this.Question = new Question();
    }
}