import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./products.model";



@Injectable()
export class ProductService {
     products: Product[] = [];

    constructor(@InjectModel('Product') private readonly productModel: Model<Product> ) {}
 async insertProduct(title: string, desc: string, price: number )  {
    const newProduct = new this.productModel({
        title,
        description: desc,
        price,
    })

   const result = await newProduct.save();
   console.log(result);
   return result.id as string; 

 }  

 async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({id: prod.id, title: prod.title, description: prod.description, price: prod.price}));
   }

private async findProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    if(!product) {
        throw new NotFoundException("data NOt Found");
    }

    return product;
}

async getAsingleProduct(productId :string) {
    const product  = await this.findProduct(productId);
    return {
        id: product.id, 
        title: product.title, 
        description: 
        product.description, 
        price: product.price };
}

async updateProduct(productId: string, title: string, desc: string, price: number) {
    const updatedProduct = await this.findProduct(productId);
    if(title){
        updatedProduct.title = title;
    }
    if(desc){
        updatedProduct.description = desc;
    }
    if(price) {
        updatedProduct.price = price;
    }
    updatedProduct.save();
}

deleteProduct(prodId: string){
   this.productModel.deleteOne({_id: prodId}).exec();
}






}