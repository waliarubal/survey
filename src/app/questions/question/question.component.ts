import { Component, Input } from '@angular/core';
import { Question } from '@models/question.model';
import { SurveyService } from '@services/survey.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    @Input() Question: Question;
    
    IsTitleEditorVisible: boolean;
    IsTextEditorVisible: boolean;

    constructor(private readonly _surveyService: SurveyService){
        
    }

    Remove(): void{
        this._surveyService.RemoveQuestion(this.Question);
    }
}