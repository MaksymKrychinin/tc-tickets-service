import { Module } from '@nestjs/common';
import { Tickets-serviceModule } from './tickets-service/tickets-service.module';

@Module({
  imports: [Tickets-serviceModule],
})
export class AppModule {}
