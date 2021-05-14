import { Component, OnInit } from '@angular/core';
import { ToDoMock } from '../shared/mocks/todo-mock';
import { ToDo } from '../shared/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = "To Do List";
  toDoListItems : ToDo[];
  selectedToDoItem : ToDo;

  constructor() { }

  ngOnInit(): void {
    this.toDoListItems = ToDoMock;
  }

  onSelect(todo : ToDo){
    this.selectedToDoItem = todo;
  }

}
