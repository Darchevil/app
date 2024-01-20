import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../types/task';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-element',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatIconModule],
  templateUrl: './todo-list-element.component.html',
  styleUrl: './todo-list-element.component.css',
})
export class TodoListElementComponent {
  //child
  @Input() listTask: Array<Task> = [];
  @Output() taskDeleted = new EventEmitter<Task>();

  task: Task = { title: 'test', done: false };

  deleteTask(taskToDelete: Task) {
    this.taskDeleted.emit(taskToDelete);
  }
}
