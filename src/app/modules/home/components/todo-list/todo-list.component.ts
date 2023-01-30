import { Component, DoCheck } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<Task> = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck(): void {
    this.setlocalStorage();
  }

  public addItem(taskName: string) {
    this.taskList.push({ task: taskName, checked: false });
  }

  public deleteItem(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllItems() {
    const confirm = window.confirm('Voce deseja limpar toda a lista?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public validadeInput(taskName: string, index: number) {

    if (!taskName.length) {
      const confirm = window.confirm('Sua task está vazia, deseja deleta-la?');

      if (confirm) {
        this.deleteItem(index);
      }
    }
  }

  public setlocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
