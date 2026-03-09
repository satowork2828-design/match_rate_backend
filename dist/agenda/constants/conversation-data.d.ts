export interface ConversationRecord {
    userName: string;
    matchingRate: number;
    status: string;
    responseTime: Date;
    keywords: string[];
    conversation_id: string;
}
export declare const CONVERSATION_DATA: Record<string, ConversationRecord[]>;
