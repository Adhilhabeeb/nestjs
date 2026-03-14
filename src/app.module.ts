import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';


const uri =
  "mongodb+srv://adhilhabeeb960571_db_user:dfnkBP3xGlfAKN7c@cluster0.7xm9lju.mongodb.net/nestdb?retryWrites=true&w=majority&appName=Cluster0";
@Module({
  imports: [UsersModule,
    MongooseModule.forRoot(uri)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
