import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Todo} from "../todo";
import {TodoService} from "../service/todo.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  todoEdit: Todo = {
    id: 0,
    complete: false,
    content: ''
  };

  contentEdit: string;

  ngOnInit(): void {
    this.getAll()
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  addNew() {
    const value = this.content.value;
    const todo: Todo = {
      content: value,
      complete: false
    };
    this.todoService.save(todo).subscribe(res => {
      this.getAll();
    }, error => {
      alert("lỗi thêm mới")
    })
    this.content.reset();
  }

  editTodo() {
    const todo: Todo = {
      id: this.todoEdit.id,
      content: this.contentEdit,
      complete: this.todoEdit.complete
    }
    this.todoService.update(todo).subscribe(res => {
      this.getAll();
    })
  }


  change() {
    if (this.todoEdit.id === 0) {
      this.addNew();
    } else {
      this.editTodo();
      this.todoEdit.id = 0;
    }
  }

  getAll() {
    this.todoService.getAllTodo().subscribe(value => {
      this.todos = value
    })
  }

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe(res => {
      this.getAll();
    });
  }

  updateTodo(todo: Todo) {
    this.todoEdit = todo;
    this.contentEdit = todo.content;
  }
}
