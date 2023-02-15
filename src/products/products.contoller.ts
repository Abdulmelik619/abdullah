import { Controller } from "@nestjs/common";
import { Body, Delete, Get, Param, Patch, Post } from "@nestjs/common/decorators";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController {

    constructor(private readonly productservice: ProductService){}

@Post()
async addProduct(
    @Body('title') prodTitle: string, 
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number) {
   const generatedId = await this.productservice.insertProduct(prodTitle, prodDesc, prodPrice);

   return { id: generatedId};

}

@Get()
async getAllproducts() {
    const products = await this.productservice.getProducts();
    return products;
}

@Get(':id')
getAsingleprodct(@Param('id') productId: string) {
    return this.productservice.getAsingleProduct(productId);
}

@Patch(':id')
async updateProduct(
@Param('id') prodId: string,
@Body('title') prodTitle: string,
@Body('description') prodDesc: string,
@Body('price') prodPrice: number,
) {
    /*Define this function in authservice Module*/
    await this.productservice.updateProduct(prodId,prodTitle, prodDesc, prodPrice);
    return null;
}

@Delete(':id')
async removeProduct(
    @Param('id') productId: string)
    {
        await this.productservice.deleteProduct(productId);
        return null;
}

}