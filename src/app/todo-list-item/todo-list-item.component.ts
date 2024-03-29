import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../shared/ToDo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() toDoItem : ToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
