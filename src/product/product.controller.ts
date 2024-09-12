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
    // @Get(':id')
    // get_product_by_id(@Param('id') id:string){
    // // return this.productService.getProduct_by_id(id);
    // return "this id id";
    // }
    @Get(':id')
    getItem(@Param('id') id: number) {
      return this.productService.getProduct_by_id(id);
    }
    // @Delete(':id')
    // async deleteProduct(@Param('id')id:number) : Promise<void>{
    // return this.productService.deleteProduct(id);
    // }
}
