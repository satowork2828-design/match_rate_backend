export interface AgendaItem {
  id: string;
  agendaName: string;
  scriptName: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
  { id: '1', agendaName: '四半期レビュー', scriptName: 'Q1-レビュー用スクリプト' },
  { id: '2', agendaName: '製品ロードマップ', scriptName: 'ロードマップ-2025' },
  { id: '3', agendaName: 'チームスタンドアップ', scriptName: 'デイリースタンドアップ' },
  { id: '4', agendaName: 'スプリント計画', scriptName: 'スプリント計画-v2' },
  { id: '5', agendaName: '振り返り', scriptName: '振り返りテンプレート' },
];

export interface RegisteredAgenda {
  agendaName: string;
  scriptName: string;
  mainTalk: string;
  subTalk: string;
}

export const REGISTERED_AGENDAS: RegisteredAgenda[] = [];
