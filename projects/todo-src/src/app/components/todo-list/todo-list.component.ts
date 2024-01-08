import { Component, OnInit } from '@angular/core';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';
import { Task } from '../../types/task';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListElementComponent, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  //Parent component
  //Possède une liste de task et c'est lui qui update les task et qui peut agir sur les tasks
  // updateListTask(taskToPush: Task) {
  //   this.listTask.push(taskToPush);
  // }
}
