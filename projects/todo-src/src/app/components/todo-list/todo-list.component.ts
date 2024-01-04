import { Component } from '@angular/core';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListElementComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  //Parent component
  //Possède une liste de task et c'est lui qui update les task et qui peut agir sur les tasks
}
