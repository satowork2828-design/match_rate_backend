export interface AgendaItem {
  id: string;
  agendaName: string;
  scriptName: string;
  mainTalk: string;
  subTalk: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
  { id: '1', agendaName: 'SMS送信テスト', scriptName: 'SMSテスト', mainTalk: '', subTalk: '' },
  { id: '2', agendaName: '（C）メンズ脱毛専門店RINX', scriptName: 'リンクス', mainTalk: '', subTalk: '' },
  { id: '3', agendaName: '報告レポートsysテスト', scriptName: '各拠点へ報告', mainTalk: '', subTalk: '' },
  { id: '4', agendaName: 'デモ', scriptName: 'API用', mainTalk: '', subTalk: '' },
  { id: '5', agendaName: 'bp9esvuf', scriptName: 'test', mainTalk: '', subTalk: '' },
];

export interface RegisteredAgenda {
  agendaName: string;
  scriptName: string;
  mainTalk: string;
  subTalk: string;
}

export const REGISTERED_AGENDAS: RegisteredAgenda[] = [];
