import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class IsLoggedInMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("IsLoggedInMiddleware");
    next();
  }
}
