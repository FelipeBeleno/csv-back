import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CsvDocument = Csv & Document;

@Schema()
export class Csv {
  @Prop({ required: true })
  headers: string[];

  @Prop({ required: true })
  data: string[];

  @Prop({ required: true })
  name: string;
}

export const CsvSchema = SchemaFactory.createForClass(Csv);