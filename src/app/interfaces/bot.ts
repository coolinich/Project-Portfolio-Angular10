export interface BotMessageBody {
    chat_id: string | number;
    text: string;
    parse_mode?: string;
}

export interface PostBotResponse {
    ok: boolean;
    description?: string;
    result?: any;
}
