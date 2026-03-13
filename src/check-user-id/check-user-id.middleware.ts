import { Injectable, NestMiddleware } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CheckUserIdMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) { } // inject UsersServic
  async use(req: any, res: any, next: () => void) {
    let id = req.params.id
    console.log(id, "isn ifddd");
    const user = await this.usersService.findOne(id); // await the promise
    console.log(user, "user");
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Optionally attach the user to req for later use
    req.user = user;

    next();

  }
}
