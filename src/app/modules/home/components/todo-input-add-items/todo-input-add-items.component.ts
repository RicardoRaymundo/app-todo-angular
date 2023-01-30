import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() public emitNewTask = new EventEmitter();

  public newTask: string = '';

  public submitNewTask() {
    this.newTask = this.newTask.trim();
    if (this.newTask) {
      this.emitNewTask.emit(this.newTask);
      this.newTask = '';
    }
  }
}
