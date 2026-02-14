import {Component} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const randomUsers = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class User {
  user = DUMMY_USERS[randomUsers]

  get imagePath() {
    return  "assets/images/" + this.user.avatar;
  }


  onClick() {
    const randomUsers = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user = DUMMY_USERS[randomUsers]

  }

  protected readonly onsubmit = onsubmit;
}
