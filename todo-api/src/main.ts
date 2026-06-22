import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {} from "";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');

  const config = now DocumentBuilder()
  .setTitle("Todo-Api")
  .setDescription("A document od Todo api")
  .setVersion("1.0.0")
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api-docs", app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

