import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '@my-workspace/data'

@Component({
  selector: 'my-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient){
    this.fetch()
  }
  title = 'my-angular-app';

  todos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' }
  ]

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => this.todos = t)
  }

  addTodo() {
    const newTodo = { title: 'cockbags' + Math.random() }
    this.http.post('api/addTodo', newTodo).subscribe(() => this.fetch())
  }

}
