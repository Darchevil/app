import { Component, OnInit } from '@angular/core';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';
import { NgFor } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListElementComponent, NgFor, MatDialogModule],
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

  openPopup() {
    this.dialog.open(PopupComponent);
  }
  onCloseClick(): void {
    this.dialog.closeAll();
  }
}
