import { Module } from '@nestjs/common';
import { AgendaModule } from './agenda/agenda.module';

@Module({
  imports: [AgendaModule],
})
export class AppModule {}
