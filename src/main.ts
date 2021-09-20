import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials:true
  });
  app.setGlobalPrefix('graphql')
  await app.listen(process.env.PORT || 4000,()=>console.log(`APP RUNNING ON PORT ${process.env.PORT}`));
}
bootstrap();

//separate frontend and backend then do deployment again