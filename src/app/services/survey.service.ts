import { Injectable } from '@angular/core';
import { Question } from '@models/question.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@models/user.model';

@Injectable()
export class SurveyService {
    private _questions: BehaviorSubject<Question[]>;
    private _questionsStore: Question[];
    private _userStore: User[];
    private _users: BehaviorSubject<User[]>;

    constructor() {
        this._questionsStore = this.GetDefaultQuestions();
        this._questions = new BehaviorSubject(this._questionsStore);

        this._userStore = [];
        this._users = new BehaviorSubject(this._userStore);
    }

    get Questions(): Observable<Question[]> {
        return this._questions.asObservable();
    }

    get Users(): Observable<User[]> {
        return this._users.asObservable();
    }

    private GetDefaultQuestions(): Question[] {
        let questions = [
            new Question('Territory', 'Are you clear about where we are now, where we are going and how we are going to get there?'),
            new Question('Opportunities & ‘Wealth’', 'Are you clear about where our income will come from within this current financial year?'),
            new Question('Ambitious and Challenges', 'Are you clear about what will be different in three years time?'),
            new Question('Change and Migration', 'Are you clear about what is changing and the actions we need to take to adapt?'),
            new Question('Protect and Action', 'Are you clear about the key problems we are collectively trying to solve?'),
            new Question('Experience and Resources', 'Do you have access to the resources and skills to achieve our goals?'),
            new Question('Responsibility and Authority', 'Do you have sufficient authority to deliver your responsibilities?'),
            new Question('Accountable & Sustainable', 'My colleagues are anxious about how change might affect them?'),
            new Question('Pride and Respect', 'I feel respected for my contribution.'),
            new Question('Capabilities and Values', 'Most employees ive the core values of this organisation.'),
            new Question('Integrity and Reputation', 'Most employees will do everything that it takes to protect the integrity and reputation of this organization.'),
            new Question('Collaboration and Contribution', 'The level of willingness to communicate, contribute and collaborate across internal silos is high.'),
            new Question('’Earned’ Leadership', 'Our leaders have earned our trust and faith so most employees naturally follow them.'),
            new Question('Courage and Hope', 'Our leaders inspire courage in their teams and give us hope in the future.'),
            new Question('Belonging and Purpose', 'Our leaders are able to create a shared purpose, passion and momentum towards a common vision.'),
            new Question('’Humility’ of Authority', 'Our leaders listen to others and are willing to acknowledge that they don’t have all the answers.')
        ];
        return questions;
    }

    AddQuestion(): void {
        let question = new Question();
        this._questionsStore.push(question);
        this._questions.next(this._questionsStore);
    }

    RemoveQuestion(question: Question): void {
        let index = this._questionsStore.indexOf(question);
        if (index < 0)
            return;

        this._questionsStore.splice(index, 1);
        this._questions.next(this._questionsStore);
    }

    AddUser(): void {
        let user = new User();
        this._userStore.push(user);
        this._users.next(this._userStore);
    }

    RemoveUser(user: User): void {
        let index = this._userStore.indexOf(user);
        if (index < 0)
            return;

        this._userStore.splice(index, 1);
        this._users.next(this._userStore);
    }
}