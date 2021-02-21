import { NestFactory } from '@nestjs/core';
import { BlogModule } from './blog.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Blog');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BlogModule, {
    transport: Transport.TCP,
    options: {
      port: 4000,
    },
  });
  await app.listen(() => logger.log('Microservice is listening'));
}
bootstrap();
