import { Controller, Get } from '@nestjs/common';

@Controller() // <-- Middleware NOT working
// @Controller('test') // <-- Middleware working
export class AppController {
  // tslint:disable-next-line:no-empty
  constructor() {}

  @Get()
  getHello(): string {
    return 'HELLO';
  }
}
