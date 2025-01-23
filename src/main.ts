import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.enableCors({
    origin: ['http://localhost:3000', 'https://client-adm.vercel.app']
  })

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Upload CSV and Auth')
    .setDescription('Upload CSV and Auth')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('csv')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document, {
      jsonDocumentUrl: 'doc/json',
    });
  
  await app.listen(4000);
}

bootstrap();