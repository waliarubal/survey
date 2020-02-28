import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SurveyService } from '@services/survey.service';
import { User } from '@models/user.model';
import { Survey } from '@models/survey.model';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    providers: [SurveyService]
})
export class SurveyComponent {
    private _survey: Survey;
    @Output() readonly SubmitAnswersClicked: EventEmitter<Survey>;

    constructor(private readonly _surveyService: SurveyService) {
        this.SubmitAnswersClicked = new EventEmitter();
    }

    @Input() 
    set User(value: User) {
        this._survey = this._surveyService.GetSurvey(value);
    }

    get Survey(): Survey {
        return this._survey;
    }


    SubmitAnswers(): void{
        this._surveyService.SetSurvey(this.Survey);
        this.SubmitAnswersClicked.emit(this.Survey);
    }
}