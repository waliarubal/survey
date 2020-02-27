export class Question {
    Title: string;
    Text: string;

    constructor(title: string = undefined, text: string = undefined){
        this.Title = title;
        this.Text = text;
    }
}