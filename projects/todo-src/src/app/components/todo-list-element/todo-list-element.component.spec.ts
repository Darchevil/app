import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListElementComponent } from './todo-list-element.component';

describe('TodoListElementComponent', () => {
  let component: TodoListElementComponent;
  let fixture: ComponentFixture<TodoListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
