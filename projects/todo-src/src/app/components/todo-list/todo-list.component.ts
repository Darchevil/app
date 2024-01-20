import { Component, OnInit } from '@angular/core';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';
import { NgFor, NgIf } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
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
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private dialog: MatDialog) {}
  //Parent component
  //Possède une liste de task et c'est lui qui update les task et qui peut agir sur les tasks
  opened: boolean = false;
  listTask: Array<Task> = [];
  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.componentInstance.newTask.subscribe((taskCreated: Task) => {
      console.log('Nouvelle tache :', taskCreated);
      this.listTask.push(taskCreated);
    });
  }
  addNewTask(taskToCreate: Task) {
    this.listTask.push(taskToCreate);
  }

  onCloseClick(): void {
    this.dialog.closeAll();
  }

  deleteTask(taskToDelete: Task) {
    const index = this.listTask.indexOf(taskToDelete);
    if (index !== -1) {
      this.listTask.splice(index, 1);
    }
  }
}
