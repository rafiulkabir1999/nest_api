import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get()
    getProduct():string{
    return 'hi';//this.productService.getProduct();
    }
}
