import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [UsersComponent]
})
export class UsersModule {

}