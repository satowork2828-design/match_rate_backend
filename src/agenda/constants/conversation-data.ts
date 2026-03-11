export interface ConversationRecord {
  userName: string;
  matchingRate: number;
  status: string;
  responseTime: string;
  keywords: string[];
  conversation_id: string;
}

export const CONVERSATION_DATA: Record<string, ConversationRecord[]> = {
  '1': [
    { userName: '山田太郎', matchingRate: 0.85, status: '対応完了', responseTime: '2025-03-05', keywords: ['レビュー', '四半期'], conversation_id: 'conv-1-001' },
    { userName: '山田太郎', matchingRate: 0.92, status: '報告', responseTime: '2025-03-05', keywords: ['目標', '達成'], conversation_id: 'conv-1-002' },
    { userName: '山田太郎', matchingRate: 0.78, status: 'エスカレ', responseTime: '2025-03-05', keywords: ['改善', '課題'], conversation_id: 'conv-1-003' },
    { userName: '佐藤花子', matchingRate: 0.88, status: '報告', responseTime: '2025-03-05', keywords: ['進捗', '報告'], conversation_id: 'conv-1-004' },
    { userName: '佐藤花子', matchingRate: 0.91, status: '対応完了', responseTime: '2025-03-05', keywords: ['次期', '計画'], conversation_id: 'conv-1-005' },
    { userName: '鈴木一郎', matchingRate: 0.75, status: '架電禁止', responseTime: '2025-03-06', keywords: ['分析', 'データ'], conversation_id: 'conv-1-006' },
    { userName: '鈴木一郎', matchingRate: 0.82, status: '対応完了', responseTime: '2025-03-06', keywords: ['提案', '改善'], conversation_id: 'conv-1-007' },
    { userName: '田中次郎', matchingRate: 0.90, status: '報告', responseTime: '2025-03-06', keywords: ['まとめ', '共有'], conversation_id: 'conv-1-008' },
    { userName: '田中次郎', matchingRate: 0.86, status: '対応完了', responseTime: '2025-03-06', keywords: ['確認', '承認'], conversation_id: 'conv-1-009' },
    { userName: '高橋美咲', matchingRate: 0.79, status: 'エスカレ', responseTime: '2025-03-07', keywords: ['質問', '回答'], conversation_id: 'conv-1-010' },
  ],
  '2': [
    { userName: '山田太郎', matchingRate: 0.82, status: '報告', responseTime: '2025-03-03', keywords: ['ロードマップ', '製品'], conversation_id: 'conv-2-001' },
    { userName: '山田太郎', matchingRate: 0.89, status: '対応完了', responseTime: '2025-03-03', keywords: ['優先度', 'スケジュール'], conversation_id: 'conv-2-002' },
    { userName: '佐藤花子', matchingRate: 0.91, status: '架電禁止', responseTime: '2025-03-04', keywords: ['機能', 'リリース'], conversation_id: 'conv-2-003' },
    { userName: '佐藤花子', matchingRate: 0.87, status: '対応完了', responseTime: '2025-03-04', keywords: ['要件', '検討'], conversation_id: 'conv-2-004' },
    { userName: '鈴木一郎', matchingRate: 0.76, status: 'エスカレ', responseTime: '2025-03-04', keywords: ['技術', '実装'], conversation_id: 'conv-2-005' },
    { userName: '鈴木一郎', matchingRate: 0.84, status: '報告', responseTime: '2025-03-04', keywords: ['設計', '開発'], conversation_id: 'conv-2-006' },
    { userName: '田中次郎', matchingRate: 0.88, status: '対応完了', responseTime: '2025-03-05', keywords: ['予算', 'リソース'], conversation_id: 'conv-2-007' },
    { userName: '高橋美咲', matchingRate: 0.80, status: '架電禁止', responseTime: '2025-03-05', keywords: ['マーケット', '競合'], conversation_id: 'conv-2-008' },
    { userName: '高橋美咲', matchingRate: 0.85, status: '報告', responseTime: '2025-03-05', keywords: ['顧客', 'フィードバック'], conversation_id: 'conv-2-009' },
    { userName: '伊藤健太', matchingRate: 0.77, status: '対応完了', responseTime: '2025-03-06', keywords: ['テスト', '品質'], conversation_id: 'conv-2-010' },
  ],
  '3': [
    { userName: '山田太郎', matchingRate: 0.93, status: '報告', responseTime: '2025-03-09', keywords: ['スタンドアップ', '進捗'], conversation_id: 'conv-3-001' },
    { userName: '山田太郎', matchingRate: 0.88, status: 'エスカレ', responseTime: '2025-03-09', keywords: ['ブロッカー', '課題'], conversation_id: 'conv-3-002' },
    { userName: '佐藤花子', matchingRate: 0.90, status: '対応完了', responseTime: '2025-03-09', keywords: ['報告', '共有'], conversation_id: 'conv-3-003' },
    { userName: '鈴木一郎', matchingRate: 0.81, status: '架電禁止', responseTime: '2025-03-09', keywords: ['技術', '実装'], conversation_id: 'conv-3-004' },
    { userName: '鈴木一郎', matchingRate: 0.86, status: '報告', responseTime: '2025-03-09', keywords: ['コード', 'レビュー'], conversation_id: 'conv-3-005' },
    { userName: '田中次郎', matchingRate: 0.89, status: '対応完了', responseTime: '2025-03-09', keywords: ['タスク', '進捗'], conversation_id: 'conv-3-006' },
    { userName: '高橋美咲', matchingRate: 0.79, status: '架電禁止', responseTime: '2025-03-09', keywords: ['質問', '回答'], conversation_id: 'conv-3-007' },
    { userName: '伊藤健太', matchingRate: 0.84, status: '対応完了', responseTime: '2025-03-09', keywords: ['明日', '予定'], conversation_id: 'conv-3-008' },
    { userName: '伊藤健太', matchingRate: 0.87, status: 'エスカレ', responseTime: '2025-03-09', keywords: ['協力', 'サポート'], conversation_id: 'conv-3-009' },
    { userName: '渡辺さくら', matchingRate: 0.82, status: '報告', responseTime: '2025-03-09', keywords: ['確認', '連絡'], conversation_id: 'conv-3-010' },
  ],
  '4': [
    { userName: '山田太郎', matchingRate: 0.85, status: 'エスカレ', responseTime: '2025-03-07', keywords: ['スプリント', '計画'], conversation_id: 'conv-4-001' },
    { userName: '佐藤花子', matchingRate: 0.88, status: '報告', responseTime: '2025-03-07', keywords: ['ストーリー', 'ポイント'], conversation_id: 'conv-4-002' },
    { userName: '佐藤花子', matchingRate: 0.91, status: '対応完了', responseTime: '2025-03-07', keywords: ['優先', '順序'], conversation_id: 'conv-4-003' },
    { userName: '鈴木一郎', matchingRate: 0.78, status: '架電禁止', responseTime: '2025-03-07', keywords: ['技術', '実装'], conversation_id: 'conv-4-004' },
    { userName: '鈴木一郎', matchingRate: 0.83, status: '報告', responseTime: '2025-03-07', keywords: ['見積', '工数'], conversation_id: 'conv-4-005' },
    { userName: '田中次郎', matchingRate: 0.86, status: '対応完了', responseTime: '2025-03-07', keywords: ['リソース', '割当'], conversation_id: 'conv-4-006' },
    { userName: '高橋美咲', matchingRate: 0.80, status: 'エスカレ', responseTime: '2025-03-07', keywords: ['レビュー', '承認'], conversation_id: 'conv-4-007' },
    { userName: '伊藤健太', matchingRate: 0.82, status: '架電禁止', responseTime: '2025-03-07', keywords: ['タスク', '分担'], conversation_id: 'conv-4-008' },
    { userName: '渡辺さくら', matchingRate: 0.84, status: '対応完了', responseTime: '2025-03-07', keywords: ['目標', '達成'], conversation_id: 'conv-4-009' },
    { userName: '渡辺さくら', matchingRate: 0.87, status: '報告', responseTime: '2025-03-07', keywords: ['デモ', '完了'], conversation_id: 'conv-4-010' },
  ],
  '5': [
    { userName: '山田太郎', matchingRate: 0.89, status: '架電禁止', responseTime: '2025-03-08', keywords: ['振り返り', '良かった'], conversation_id: 'conv-5-001' },
    { userName: '山田太郎', matchingRate: 0.92, status: '対応完了', responseTime: '2025-03-08', keywords: ['改善', '課題'], conversation_id: 'conv-5-002' },
    { userName: '佐藤花子', matchingRate: 0.86, status: '報告', responseTime: '2025-03-08', keywords: ['共有', '学び'], conversation_id: 'conv-5-003' },
    { userName: '鈴木一郎', matchingRate: 0.81, status: 'エスカレ', responseTime: '2025-03-08', keywords: ['技術', '改善'], conversation_id: 'conv-5-004' },
    { userName: '田中次郎', matchingRate: 0.90, status: '対応完了', responseTime: '2025-03-08', keywords: ['プロセス', '効率'], conversation_id: 'conv-5-005' },
    { userName: '田中次郎', matchingRate: 0.85, status: '報告', responseTime: '2025-03-08', keywords: ['コミュニケーション', '連携'], conversation_id: 'conv-5-006' },
    { userName: '高橋美咲', matchingRate: 0.79, status: '架電禁止', responseTime: '2025-03-08', keywords: ['フィードバック', '提案'], conversation_id: 'conv-5-007' },
    { userName: '伊藤健太', matchingRate: 0.83, status: 'エスカレ', responseTime: '2025-03-08', keywords: ['アクション', '次回'], conversation_id: 'conv-5-008' },
    { userName: '渡辺さくら', matchingRate: 0.88, status: '対応完了', responseTime: '2025-03-08', keywords: ['まとめ', '決定'], conversation_id: 'conv-5-009' },
    { userName: '渡辺さくら', matchingRate: 0.84, status: '報告', responseTime: '2025-03-08', keywords: ['フォロー', '実施'], conversation_id: 'conv-5-010' },
  ],
};
