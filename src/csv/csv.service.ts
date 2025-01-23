import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as XLSX from 'xlsx';
import { Csv } from './entities/csv.entity';


@Injectable()
export class CsvService {

  constructor(@InjectModel('Csv') private readonly csvModel: Model<Csv>) { }

  async uploadCsv(file: Express.Multer.File) {

    try {
      const result = await this.convertToJSON(file);

      if (result.length <= 0) {
        throw new BadRequestException('Empty file');
      }
      let [headers, ...rest] = result;

      const newData = await this.csvModel.create({
        headers,
        data: rest,
        name: file.originalname
      })

      await newData.save();

      return {
        status: true,
        message: 'Data saved successfully',
      };

    } catch (error) {
      return {
        status: false,
        message: error.message
      }
    }

  }

  convertToJSON(file: Express.Multer.File) {
    return new Promise<any[]>((resolve, reject) => {
      try {
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });



        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }


  async getAll(){
    return await this.csvModel.find().exec();
  }

}
