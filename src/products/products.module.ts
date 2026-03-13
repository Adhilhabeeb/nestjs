import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CheckUserIdMiddleware } from 'src/check-user-id/check-user-id.middleware';
import { UsersService } from 'src/users/users.service';

@Module({ controllers: [ProductsController] })
export class ProductsModule { }