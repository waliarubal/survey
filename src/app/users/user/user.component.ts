import { Component, Input } from '@angular/core';
import { SurveyService } from '@services/survey.service';
import { User } from '@models/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    
    @Input() User: User;

    IsNameEditorVisible: boolean;

    constructor(private readonly _surveyService: SurveyService) {
        
    }

    Remove(): void {
        this._surveyService.RemoveUser(this.User);
    }
}