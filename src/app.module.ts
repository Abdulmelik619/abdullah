import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ProductsModule } from './products/products.module';
import {MongooseModule } from'@nestjs/mongoose';
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, MongooseModule.forRoot(
    'mongodb+srv://Abdulmelik619:bismillah1@cluster0.457xzt4.mongodb.net/nestjspracice?retryWrites=true&w=majority'
  ), ProductsModule],

})
export class AppModule {}
