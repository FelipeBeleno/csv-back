import { Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CsvService } from './csv.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('csv')
@UseGuards(AuthGuard)
export class CsvController {
  constructor(private readonly csvService: CsvService) { }

  @Get()
  async getAll() {
    return await this.csvService.getAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file: Express.Multer.File) {
    const response = await this.csvService.uploadCsv(file);
    return response;
  }


}