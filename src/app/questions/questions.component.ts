import { Component } from '@angular/core';
import { SurveyService } from '@services/survey.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    constructor(private readonly _surveyService: SurveyService) { }

    get Questions() {
        return this._surveyService.Questions;
    }

    AddQuestion(): void {
        this._surveyService.AddQuestion();
    }

    ScrollTo(element: HTMLElement): void {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}