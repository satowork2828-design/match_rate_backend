import { Injectable } from '@nestjs/common';
import { AGENDA_ITEMS, AgendaItem } from './constants/agenda-data';

@Injectable()
export class AgendaService {
  findAll(): AgendaItem[] {
    return AGENDA_ITEMS;
  }
}
