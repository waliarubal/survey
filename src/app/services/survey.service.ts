import { Injectable } from '@angular/core';
import { Question } from '@models/question.model';

@Injectable()
export class SurveyService {
    private readonly _questions: Question[];

    constructor(){
        this._questions = [];
    }

    get Questions(): Question[] {
        return this._questions;
    }

    AddNewQuestion(): void {
        let question = new Question();
        this.Questions.push(question);
    }
}