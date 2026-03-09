import { Injectable } from '@nestjs/common';
import {
  AGENDA_ITEMS,
  REGISTERED_AGENDAS,
  AgendaItem,
  RegisteredAgenda,
} from './constants/agenda-data';
import { CONVERSATION_DATA } from './constants/conversation-data';

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

@Injectable()
export class AgendaService {
  findAll(): AgendaItem[] {
    return AGENDA_ITEMS;
  }

  findById(id: string): AgendaItem | undefined {
    return AGENDA_ITEMS.find((item) => item.id === id);
  }

  getAgendaNames(): string[] {
    return [...new Set(AGENDA_ITEMS.map((item) => item.agendaName))];
  }

  register(data: RegisteredAgenda): void {
    AGENDA_ITEMS.push({ id: crypto.randomUUID() as string, ...data });
  }

  getMatchingRatesByAgendaId(agendaId: string): UserMatchingRate[] {
    const records = CONVERSATION_DATA[agendaId] ?? [];
    const byUser = new Map<string, number[]>();
    for (const r of records) {
      const rates = byUser.get(r.userName) ?? [];
      rates.push(r.matchingRate);
      byUser.set(r.userName, rates);
    }
    return Array.from(byUser.entries()).map(([userName, rates]) => ({
      userName,
      matchingRate: rates.reduce((a, b) => a + b, 0) / rates.length,
    }));
  }

  getConversations(params: ConversationSearchParams): ConversationResult[] {
    const records = CONVERSATION_DATA[params.agendaId] ?? [];
    let filtered = records.filter((r) => r.userName === params.userName);

    if (params.status?.trim()) {
      filtered = filtered.filter((r) => r.status === params.status!.trim());
    }

    if (params.responseTime?.trim()) {
      const threshold = new Date(params.responseTime);
      filtered = filtered.filter((r) => r.responseTime < threshold);
    }
    if (params.keywords?.trim()) {
      const terms = params.keywords
        .split(/[\s,、]+/)
        .map((t) => t.trim())
        .filter(Boolean);
      if (terms.length > 0) {
        filtered = filtered.filter((r) => {
          const allStrings = [
            r.status,
            r.userName,
            ...r.keywords,
          ].join(' ');
          return terms.some((term) => allStrings.includes(term));
        });
      }
    }

    return filtered.map((r) => ({
      conversation_id: r.conversation_id,
      completionRate: r.matchingRate,
      status: r.status,
      responseTime: r.responseTime.toISOString(),
    }));
  }

  getConversationById(conversationId: string): ConversationDetail | undefined {
    for (const records of Object.values(CONVERSATION_DATA)) {
      const found = records.find((r) => r.conversation_id === conversationId);
      if (found) {
        return {
          conversation_id: found.conversation_id,
          userName: found.userName,
          matchingRate: found.matchingRate,
          status: found.status,
          responseTime: found.responseTime.toISOString(),
          keywords: found.keywords,
        };
      }
    }
    return undefined;
  }
}
