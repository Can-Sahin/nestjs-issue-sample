import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  // tslint:disable-next-line:ban-types
  public use(req: Request, res: Response, next: Function) {
    // tslint:disable-next-line:no-console
    console.log('THIS IS NOT CALLED');
    next();
  }
}
