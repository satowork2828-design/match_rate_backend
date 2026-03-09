import { AgendaService } from './agenda.service';
import { RegisterAgendaDto } from './dto/register-agenda.dto';
export declare class AgendaController {
    private readonly agendaService;
    constructor(agendaService: AgendaService);
    getAgendaItems(): import("./constants/agenda-data").AgendaItem[];
    getAgendaNames(): string[];
    getConversationById(conversationId: string): import("./agenda.service").ConversationDetail | {
        error: string;
    };
    getMatchingRates(id: string): import("./agenda.service").UserMatchingRate[];
    getConversations(agendaId: string, userName: string, status?: string, responseTime?: string, keywords?: string): import("./agenda.service").ConversationResult[];
    getAgendaById(id: string): import("./constants/agenda-data").AgendaItem | {
        error: string;
    };
    register(dto: RegisterAgendaDto): {
        success: boolean;
    };
}
