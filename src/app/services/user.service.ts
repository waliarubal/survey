import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@models/user.model';

@Injectable()
export class UserService {
    private _userStore: User[];
    private _users: BehaviorSubject<User[]>;

    constructor() {
        this._userStore = [];
        this._users = new BehaviorSubject(this._userStore);
    }

    get Users(): Observable<User[]> {
        return this._users.asObservable();
    }

    get Count(): number {
        return this._userStore.length;
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