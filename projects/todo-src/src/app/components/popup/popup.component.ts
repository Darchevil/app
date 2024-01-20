import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../types/task';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgIf,
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  taskForm = new FormGroup({
    titleCreate: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  taskCreated?: Task;
  @Output() newTask = new EventEmitter<Task>();
  constructor(private dialog: MatDialogRef<PopupComponent>) {}

  get titleCreate() {
    return this.taskForm.get('titleCreate');
  }

  onClose() {
    this.dialog.close();
  }

  onSubmit() {
    const taskResult = this.taskForm.value;
    if (taskResult.titleCreate) {
      this.taskCreated = new Task(taskResult.titleCreate);
      this.newTask.emit(this.taskCreated);
    }
    this.dialog.close();
  }
}
