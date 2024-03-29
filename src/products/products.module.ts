import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './products.contoller';
import { ProductSchema } from './products.model';
import { ProductService } from './products.service';

@Module({
    imports:[MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductsModule {}
