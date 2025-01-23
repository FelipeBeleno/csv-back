import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(configuration().db_path),
    AuthModule,
    CsvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
