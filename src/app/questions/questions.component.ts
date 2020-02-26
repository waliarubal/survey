import { Component } from '@angular/core';
import { SurveyService } from '@services/survey.service';
import { Question } from '@models/question.model';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    constructor(private readonly _surveyService: SurveyService) { }

    get Questions(): Question[]{
        return this._surveyService.Questions;
    }

    AddNewQuestion(): void {
        this._surveyService.AddNewQuestion();
    }
}