import {Component, computed, EventEmitter, Input, input, Output} from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
  @Output() select = new EventEmitter();


  get imagePath() {
    return `assets/images/${this.avatar}`;
  }


  onClick() {
    this.select.emit(this.id);
  }

  protected readonly onsubmit = onsubmit;
}
