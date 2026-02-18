import {Component, computed, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
  standalone: true
})
export class Tasks {
  @Input() name?: string;
  @Input() tasks?: string;

}
