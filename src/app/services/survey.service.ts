import { Injectable } from '@angular/core';
import { Survey } from '@models/survey.model';
import { QuestionService } from './question.service';
import { User } from '@models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SurveyService {
    private _surveyStore: Survey[];
    private _surveys: BehaviorSubject<Survey[]>;

    constructor(private readonly _questionService: QuestionService) {
        this._surveyStore = [];
        this._surveys = new BehaviorSubject(this._surveyStore);
    }

    get Surveys(): Observable<Survey[]> {
        return this._surveys.asObservable();
    }

    get Count(): number {
        return this._surveyStore.length;
    }

    AddSurvey(): void {
        let user = new User();

        let survey = new Survey(user, this._questionService.GetQuestions());
        this._surveyStore.push(survey);
        this._surveys.next(this._surveyStore);
    }

    RemoveSurvey(user: User): void {
        let surveyIndex = -1;
        for(let index = 0; index < this._surveyStore.length; index++) {
            if (this._surveyStore[index].User.FullName === user.FullName) {
                surveyIndex = index;
                break;
            }
        }

        if (surveyIndex < 0)
            return;

        this._surveyStore.splice(surveyIndex, 1);
        this._surveys.next(this._surveyStore);
    }
}