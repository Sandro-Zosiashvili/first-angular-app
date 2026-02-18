import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users = DUMMY_USERS;
  userID = "u1"

  get selectedUser() {

    return this.users.find(u => u.id === this.userID);
  }

  selectUser(id: string) {
    this.userID = id
  }

  protected readonly title = signal('Sandro');
}
