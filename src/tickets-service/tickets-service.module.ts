import { Module } from '@nestjs/common';
import { Tickets-serviceService } from './services/tickets-service.service';
import { Tickets-serviceController } from './controllers/tickets-service.controller';

@Module({
  controllers: [Tickets-serviceController],
  providers: [Tickets-serviceService],
})
export class Tickets-serviceModule {}
