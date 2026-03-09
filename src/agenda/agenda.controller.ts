import { Controller, Get } from '@nestjs/common';
import { AgendaService } from './agenda.service';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  getAgendaItems() {
    return this.agendaService.findAll();
  }
}
