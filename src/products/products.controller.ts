import { Controller, Get, Param, Req, Request } from '@nestjs/common';
import { User } from 'src/users/users.service';
interface RequestWithUser extends Request {
    user: User;
}

@Controller('users/:id/products')
export class ProductsController {

    @Get()
    getUserProducts(@Param('id') id: string, @Req() req: RequestWithUser,) {
        const user = req.user;
        return `Products of user ${user.name}`;
    }
}