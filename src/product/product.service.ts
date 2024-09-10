import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getProduct():string{
        return "this is product";
    }
}
