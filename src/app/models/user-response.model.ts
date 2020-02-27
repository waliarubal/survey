import { Question } from '@models/question.model';

export class UserResponse {
    Question: Question;
    Answer: number;

    constructor(question: Question){
        this.Question = question;
    }

    get IsAnswered(): boolean {
        return this.Answer && this.Answer >= 1 && this.Answer <= 7;
    }
}