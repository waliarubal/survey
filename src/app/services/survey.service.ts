import { Injectable } from '@angular/core';
import { Survey } from '@models/survey.model';
import { QuestionService } from './question.service';
import { User } from '@models/user.model';

@Injectable()
export class SurveyService {
    private _surveys: Survey[];

    constructor(private readonly _questionService: QuestionService) {
        this._surveys = [];
    }

    SetSurvey(survey: Survey): boolean {
        for(let index = 0; index < this._surveys.length; index++) {
            if (survey.User.FullName === this._surveys[index].User.FullName) {
                this._surveys[index] = survey;
                return true;
            }
        }

        return false;
    }

    GetSurvey(user: User): Survey {
        for(let survey of this._surveys){
            if (survey.User.FullName === user.FullName)
                return survey;
        }

        let survey = new Survey(user, this._questionService.GetQuestions());
        this._surveys.push(survey);
        return survey;
    }
}