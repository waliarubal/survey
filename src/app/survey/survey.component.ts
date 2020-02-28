import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Survey } from '@models/survey.model';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html'
})
export class SurveyComponent {
    @Output() readonly SubmitAnswersClicked: EventEmitter<Survey>;

    constructor() {
        this.SubmitAnswersClicked = new EventEmitter();
    }

    @Input() Survey: Survey;

    SubmitAnswers(): void{
        this.SubmitAnswersClicked.emit(this.Survey);
    }
}