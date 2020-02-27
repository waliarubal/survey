import { User } from '@models/user.model';
import { UserResponse } from '@models/user-response.model';
import { Question } from '@models/question.model';

export class Survey {
    readonly User: User;
    readonly Responses: UserResponse[];

    constructor(user: User, questions: Question[]) {
        let responses: UserResponse[] = []
        for(let question of questions) {
            let response = new UserResponse(question);
            responses.push(response);
        }

        this.User = user;
        this.Responses = responses;
    }

    get IsFilled(): boolean {
        for(let response of this.Responses)
            if (!response.IsAnswered)
                return false;

        return true;
    }
}