import { Component, Output, EventEmitter } from '@angular/core';
import { SurveyService } from '@services/survey.service';
import { Survey } from '@models/survey.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    @Output() readonly FillSurveyClicked: EventEmitter<Survey>;

    constructor(private readonly _surveyService: SurveyService) {
        this.FillSurveyClicked = new EventEmitter();
    }

    get Surveys() {
        return this._surveyService.Surveys;
    }

    get Count() {
        return this._surveyService.Count;
    }

    AddUser(): void {
        this._surveyService.AddSurvey();
    }
}