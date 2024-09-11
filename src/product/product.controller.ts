import { Controller, Delete, Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get()
    getProduct(){
    return this.productService.getProduct();
    }
    @Get('id')
    async get_product_by_id(@Param('id')){
    return this.productService.getProduct();
    }
    @Delete(':id')
    async deleteProduct(@Param('id')id:number) : Promise<void>{
    return this.productService.deleteProduct(id);
    }
}
