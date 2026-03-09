export interface AgendaItem {
  id: string;
  agendaName: string;
  scriptName: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
  { id: '1', agendaName: 'Quarterly Review', scriptName: 'Q1-Review-Script' },
  { id: '2', agendaName: 'Product Roadmap', scriptName: 'Roadmap-2025' },
  { id: '3', agendaName: 'Team Standup', scriptName: 'Daily-Standup' },
  { id: '4', agendaName: 'Sprint Planning', scriptName: 'Sprint-Planning-v2' },
  { id: '5', agendaName: 'Retrospective', scriptName: 'Retro-Template' },
];
