import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private todoService: TodosService
  ) { }

  @Get('api')
  getData() {
    return this.todoService.getTodos();
  }

  // @Get()
  // @Render('index')
  // root() {
  //   return {
  //     todos: this.getData(),
  //   };
  // }
}
