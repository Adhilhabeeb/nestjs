import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.scheme';
import { ProductsModule } from 'src/products/products.module';


@Module({
  imports: [ProductsModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }