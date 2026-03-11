"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaService = void 0;
const common_1 = require("@nestjs/common");
const agenda_data_1 = require("./constants/agenda-data");
const conversation_data_1 = require("./constants/conversation-data");
let AgendaService = class AgendaService {
    findAll() {
        return agenda_data_1.AGENDA_ITEMS;
    }
    findById(id) {
        return agenda_data_1.AGENDA_ITEMS.find((item) => item.id === id);
    }
    getAgendaNames() {
        return [...new Set(agenda_data_1.AGENDA_ITEMS.map((item) => item.agendaName))];
    }
    register(data) {
        agenda_data_1.AGENDA_ITEMS.push({ id: crypto.randomUUID(), ...data });
    }
    getMatchingRatesByAgendaId(agendaId) {
        const records = conversation_data_1.CONVERSATION_DATA[agendaId] ?? [];
        const byUser = new Map();
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
    getConversations(params) {
        const records = conversation_data_1.CONVERSATION_DATA[params.agendaId] ?? [];
        let filtered = records.filter((r) => r.userName === params.userName);
        if (params.status?.trim()) {
            const statusList = params.status.split(/[,、]/).map((s) => s.trim()).filter(Boolean);
            if (statusList.length > 0) {
                filtered = filtered.filter((r) => statusList.includes(r.status));
            }
        }
        if (params.responseTime?.trim()) {
            const thresholdDate = params.responseTime.slice(0, 10);
            filtered = filtered.filter((r) => r.responseTime < thresholdDate);
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
            responseTime: r.responseTime,
        }));
    }
    getConversationById(conversationId) {
        for (const records of Object.values(conversation_data_1.CONVERSATION_DATA)) {
            const found = records.find((r) => r.conversation_id === conversationId);
            if (found) {
                return {
                    conversation_id: found.conversation_id,
                    userName: found.userName,
                    matchingRate: found.matchingRate,
                    status: found.status,
                    responseTime: found.responseTime,
                    keywords: found.keywords,
                };
            }
        }
        return undefined;
    }
};
exports.AgendaService = AgendaService;
exports.AgendaService = AgendaService = __decorate([
    (0, common_1.Injectable)()
], AgendaService);
//# sourceMappingURL=agenda.service.js.map