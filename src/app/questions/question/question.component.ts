import { Component, Input } from '@angular/core';
import { Question } from '@models/question.model';
import { QuestionService } from '@services/question.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    @Input() Question: Question;
    
    IsTitleEditorVisible: boolean;
    IsTextEditorVisible: boolean;

    constructor(private readonly _questionService: QuestionService){
        
    }

    Remove(): void{
        this._questionService.RemoveQuestion(this.Question);
    }
}