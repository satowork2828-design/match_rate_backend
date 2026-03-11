export interface ConversationRecord {
    userName: string;
    matchingRate: number;
    status: string;
    responseTime: string;
    keywords: string[];
    conversation_id: string;
}
export declare const CONVERSATION_DATA: Record<string, ConversationRecord[]>;
