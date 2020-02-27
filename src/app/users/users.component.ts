import { Component } from '@angular/core';
import { SurveyService } from '@services/survey.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {

    constructor(private readonly _surveyService: SurveyService) { }

    get Users() {
        return this._surveyService.Users;
    }

    AddUser(): void {
        this._surveyService.AddUser();
    }
}