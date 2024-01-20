import { Component, OnInit } from '@angular/core';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';
import { NgFor, NgIf } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Task } from '../../types/task';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoListElementComponent,
    NgFor,
    MatDialogModule,
    PopupComponent,
    NgIf,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private dialog: MatDialog) {}
  //Parent component
  //Possède une liste de task et c'est lui qui update les task et qui peut agir sur les tasks
  // updateListTask(taskToPush: Task) {
  //   this.listTask.push(taskToPush);
  // }
  opened: boolean = false;
  listTask: Array<Task> = [];
  openPopup() {
    this.opened = true;
    // this.dialog.open(PopupComponent);
  }
  addNewTask(taskToCreate: Task) {
    this.listTask.push(taskToCreate);
  }

  onCloseClick(): void {
    this.dialog.closeAll();
  }
}
