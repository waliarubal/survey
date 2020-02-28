import { Component } from '@angular/core';
import { User } from '@models/user.model';

export enum Step {
  Questions,
  Users,
  Survey,
  Result
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly Step = Step;

  CurrentStep: Step;

  constructor() {
    this.CurrentStep = Step.Questions;
  }
}
