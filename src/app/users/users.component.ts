import { Component } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {

    constructor(private readonly _userService: UserService) { }

    get Users() {
        return this._userService.Users;
    }

    AddUser(): void {
        this._userService.AddUser();
    }
}