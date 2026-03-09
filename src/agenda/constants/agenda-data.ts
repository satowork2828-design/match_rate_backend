export interface AgendaItem {
  id: string;
  agendaName: string;
  scriptName: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
  { id: '1', agendaName: 'SMS送信テスト', scriptName: 'SMSテスト' },
  { id: '2', agendaName: '（C）メンズ脱毛専門店RINX', scriptName: 'リンクス' },
  { id: '3', agendaName: '報告レポートsysテスト', scriptName: '各拠点へ報告' },
  { id: '4', agendaName: 'デモ', scriptName: 'API用' },
  { id: '5', agendaName: 'bp9esvuf', scriptName: 'test' },
];

export interface RegisteredAgenda {
  agendaName: string;
  scriptName: string;
  mainTalk: string;
  subTalk: string;
}

export const REGISTERED_AGENDAS: RegisteredAgenda[] = [];
