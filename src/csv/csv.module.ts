import { Module } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CsvController } from './csv.controller';
import { Csv, CsvSchema } from './entities/csv.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Csv.name, schema: CsvSchema }]),
  ],
  controllers: [CsvController],
  providers: [CsvService],
})
export class CsvModule { }
