import {Component, Input, input} from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class User {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input<string>();
  name = input<string>();


  get imagePath() {
    return `/assets/images/${this.avatar}`;
  }


  onClick() {

  }

  protected readonly onsubmit = onsubmit;
}
