import { AgendaService } from './agenda.service';
export declare class AgendaController {
    private readonly agendaService;
    constructor(agendaService: AgendaService);
    getAgendaItems(): import("./constants/agenda-data").AgendaItem[];
}
