export interface AgendaItem {
    id: string;
    agendaName: string;
    scriptName: string;
    mainTalk: string;
    subTalk: string;
}
export declare const AGENDA_ITEMS: AgendaItem[];
export interface RegisteredAgenda {
    agendaName: string;
    scriptName: string;
    mainTalk: string;
    subTalk: string;
}
export declare const REGISTERED_AGENDAS: RegisteredAgenda[];
