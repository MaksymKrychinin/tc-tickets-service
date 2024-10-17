import { NestFactory } from '@nestjs/core';
import { Tickets-serviceModule } from './tickets-service/tickets-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Tickets-serviceModule);
  await app.listen(3000);
}
bootstrap();
