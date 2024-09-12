import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { DbModule } from './db/db.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './resource/users/users.module';
import typeorm from './config/typeorm';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
    ProductModule,
    // TypeOrmModule.forRoot
    // ({
    //   type:'mysql',
    //   host:'localhost',
    //   port:3306,
    //   username:'',
    //   password:'',
    //   database:'test',
    //   entities: [Product],
    //   synchronize: true,
    // }),
    DbModule,
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
