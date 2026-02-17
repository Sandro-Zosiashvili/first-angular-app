import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users = DUMMY_USERS;

  selectUser(user: { id: string, name: string }) {
    console.log("Selected user is: " + user.id)
    console.log("Selected user is: " + user.name)
  }

  deleteUser(id: string) {
    console.log("Deleted user is: " + id)
  }
  protected readonly title = signal('Sandro');
}
