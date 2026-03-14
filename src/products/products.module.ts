import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { IsLoggedInMiddleware } from 'src/is-logged-in/is-logged-in.middleware';


@Module({ controllers: [ProductsController] })
export class ProductsModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(IsLoggedInMiddleware).forRoutes('/users/products/:id');
    }
}