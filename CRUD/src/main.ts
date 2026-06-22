import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle("CRUD operation documentation")
  .setDescription("A documentation of CRUD operations")
  .setVersion("1.0.0")
  .build();

  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup("api-docs", app, document);
  
  await app.listen(process.env.PORT ?? 3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();

