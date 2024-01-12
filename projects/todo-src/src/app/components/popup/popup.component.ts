import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
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
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, CommonModule],
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

  taskToCreate?: Task;
  @Output() newTask = new EventEmitter<Task>();
  constructor(private dialog: MatDialog) {}

  get titleCreate() {
    return this.taskForm.get('titleCreate');
  }

  onClose() {
    this.dialog.closeAll();
  }

  onSubmit() {
    console.log('The form:', this.taskForm.value);
    this.dialog.closeAll();
  }
}
