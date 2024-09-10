import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDeveloper(): string {
    return 'Hello Kabir!';
  }
  getLover(): string {
    return 'Hello You !';
  }
}
