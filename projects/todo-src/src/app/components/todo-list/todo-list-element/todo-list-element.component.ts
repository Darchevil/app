import { Component, OnInit } from '@angular/core';
import { Task } from '../../../types/task';
import { NgFor } from '@angular/common';

@Component({
  selector: 'todo-list-element',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-list-element.component.html',
  styleUrl: './todo-list-element.component.css',
})
export class TodoListElementComponent implements OnInit {
  //child
  listTask: Array<Task> = [];
  task: Task = { title: 'test', done: false };

  ngOnInit(): void {
    this.listTask.push(this.task);
  }
}
