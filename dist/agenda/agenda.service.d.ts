import { AgendaItem, RegisteredAgenda } from './constants/agenda-data';
export interface UserMatchingRate {
    userName: string;
    matchingRate: number;
}
export interface ConversationResult {
    conversation_id: string;
    completionRate: number;
    status: string;
    responseTime: string;
}
export interface ConversationDetail {
    conversation_id: string;
    userName: string;
    matchingRate: number;
    status: string;
    responseTime: string;
    keywords: string[];
}
export interface ConversationSearchParams {
    agendaId: string;
    userName: string;
    status?: string;
    responseTime?: string;
    keywords?: string;
}
export declare class AgendaService {
    findAll(): AgendaItem[];
    findById(id: string): AgendaItem | undefined;
    getAgendaNames(): string[];
    register(data: RegisteredAgenda): void;
    getMatchingRatesByAgendaId(agendaId: string): UserMatchingRate[];
    getConversations(params: ConversationSearchParams): ConversationResult[];
    getConversationById(conversationId: string): ConversationDetail | undefined;
}
