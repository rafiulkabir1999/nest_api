import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule,
    TypeOrmModule.forRoot
    ({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'',
      password:'',
      database:'test',
      entities: [Product],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
