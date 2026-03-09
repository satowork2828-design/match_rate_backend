"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaController = void 0;
const common_1 = require("@nestjs/common");
const agenda_service_1 = require("./agenda.service");
const register_agenda_dto_1 = require("./dto/register-agenda.dto");
let AgendaController = class AgendaController {
    constructor(agendaService) {
        this.agendaService = agendaService;
    }
    getAgendaItems() {
        return this.agendaService.findAll();
    }
    getAgendaNames() {
        return this.agendaService.getAgendaNames();
    }
    getConversationById(conversationId) {
        const conv = this.agendaService.getConversationById(conversationId);
        if (!conv)
            return { error: 'Not found' };
        return conv;
    }
    getMatchingRates(id) {
        return this.agendaService.getMatchingRatesByAgendaId(id);
    }
    getConversations(agendaId, userName, status, responseTime, keywords) {
        return this.agendaService.getConversations({
            agendaId,
            userName,
            status,
            responseTime,
            keywords,
        });
    }
    getAgendaById(id) {
        const item = this.agendaService.findById(id);
        if (!item)
            return { error: 'Not found' };
        return item;
    }
    register(dto) {
        this.agendaService.register(dto);
        return { success: true };
    }
};
exports.AgendaController = AgendaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "getAgendaItems", null);
__decorate([
    (0, common_1.Get)('names'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "getAgendaNames", null);
__decorate([
    (0, common_1.Get)('conversation/:conversationId'),
    __param(0, (0, common_1.Param)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "getConversationById", null);
__decorate([
    (0, common_1.Get)(':id/matching-rates'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "getMatchingRates", null);
__decorate([
    (0, common_1.Get)(':id/conversations'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('userName')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('responseTime')),
    __param(4, (0, common_1.Query)('keywords')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "getConversations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "getAgendaById", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_agenda_dto_1.RegisterAgendaDto]),
    __metadata("design:returntype", void 0)
], AgendaController.prototype, "register", null);
exports.AgendaController = AgendaController = __decorate([
    (0, common_1.Controller)('agenda'),
    __metadata("design:paramtypes", [agenda_service_1.AgendaService])
], AgendaController);
//# sourceMappingURL=agenda.controller.js.map