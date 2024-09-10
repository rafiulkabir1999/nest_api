import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('developer')
  getDeveloper(): string { 
    return this.appService.getDeveloper();
  }
  @Get('lover')
  biteLover(): string { 
    return this.appService.getLover();
  }
}
