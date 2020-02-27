import { Component, EventEmitter, Output } from '@angular/core';
import { QuestionService } from '@services/question.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {
    @Output() readonly NextClicked: EventEmitter<void>;

    constructor(private readonly _questionService: QuestionService) {
        this.NextClicked = new EventEmitter();
     }

    get Questions() {
        return this._questionService.Questions;
    }

    get Count(): number {
        return this._questionService.Count;
    }

    AddQuestion(): void {
        this._questionService.AddQuestion();
    }

    ScrollTo(element: HTMLElement): void {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}