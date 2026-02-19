import {Component, computed, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
// import {Task} from '../task/task';
import {Dummy_Tasks} from '../Dummy_Tasks';
import {Task} from '../task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
  standalone: true
})
export class Tasks {
  @Input() name?: string;
  @Input({required: true}) userId!: string;
  tasks = Dummy_Tasks;


  get filterTasks() {
    return this.tasks.filter(t => t.userId === this.userId);
  }
}
