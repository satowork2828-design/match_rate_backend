import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { RegisterAgendaDto } from './dto/register-agenda.dto';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  getAgendaItems() {
    return this.agendaService.findAll();
  }

  @Get('names')
  getAgendaNames() {
    return this.agendaService.getAgendaNames();
  }

  @Get('conversation/:conversationId')
  getConversationById(@Param('conversationId') conversationId: string) {
    const conv = this.agendaService.getConversationById(conversationId);
    if (!conv) return { error: 'Not found' };
    return conv;
  }

  @Get(':id/matching-rates')
  getMatchingRates(@Param('id') id: string) {
    return this.agendaService.getMatchingRatesByAgendaId(id);
  }

  @Get(':id/conversations')
  getConversations(
    @Param('id') agendaId: string,
    @Query('userName') userName: string,
    @Query('status') status?: string,
    @Query('responseTime') responseTime?: string,
    @Query('keywords') keywords?: string,
  ) {
    return this.agendaService.getConversations({
      agendaId,
      userName,
      status,
      responseTime,
      keywords,
    });
  }

  @Get(':id')
  getAgendaById(@Param('id') id: string) {
    const item = this.agendaService.findById(id);
    if (!item) return { error: 'Not found' };
    return item;
  }

  @Post('register')
  register(@Body() dto: RegisterAgendaDto) {
    this.agendaService.register(dto);
    return { success: true };
  }
}
