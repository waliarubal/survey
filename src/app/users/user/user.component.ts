import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@models/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent {

    @Input() User: User;

    IsNameEditorVisible: boolean;

    constructor(private readonly _userService: UserService) {
        
    }

    Remove(): void {
        this._userService.RemoveUser(this.User);
    }
}