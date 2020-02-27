import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    @Output() readonly FillSurveyClicked: EventEmitter<User>;

    constructor(private readonly _userService: UserService) {
        this.FillSurveyClicked = new EventEmitter();
     }

    get Users() {
        return this._userService.Users;
    }

    get Count() {
        return this._userService.Count;
    }

    AddUser(): void {
        this._userService.AddUser();
    }
}