import {Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import {required} from '@angular/forms/signals';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class User {
  @Input({required: true}) users!: {
    id: string,
    name: string,
    avatar: string
  };
  @Output() select = new EventEmitter();


  get imagePath() {
    return `assets/images/${this.users.avatar}`;
  }


  onClick() {
    this.select.emit(this.users.id);
  }

  protected readonly onsubmit = onsubmit;
}
