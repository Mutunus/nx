import { Injectable } from '@nestjs/common';

interface Todo {
  title: string
}

@Injectable()
export class AppService {

  todos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' }
  ]

  getData(): Todo[] {
    return this.todos
  }

  addTodo() {
    const newTodo = { title: 'cockbags' + Math.round(Math.random() * 1000) }
    this.todos.push(newTodo)
  }
}
