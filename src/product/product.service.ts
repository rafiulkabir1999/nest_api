import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}
    getProduct():Promise<Product[]>{
        return this.productRepository.find();
        //return "this is product";
    }
    async deleteProduct(id:number):Promise<void>{
        await this.productRepository.delete(id) ;
        // return this.productRepository.find();
        //return "this is product";
    }
}
